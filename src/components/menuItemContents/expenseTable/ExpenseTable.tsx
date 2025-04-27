import React, { useEffect, useState } from "react";
import { Button, message, Popconfirm, PopconfirmProps, Space, Spin, Table } from "antd";
import styled from "styled-components";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TExpense } from "@src/types/expenseTypes";
import { ViewDialog } from "./dialogs/viewDialog/ViewDialog";
import { PlusOutlined } from "@ant-design/icons";
import { CreateExpenseDialog } from "./dialogs/createExpenseDialog/createExpenseDialog";
import { addData } from "@src/hooks/addToCollection/addData";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import { Category } from "@src/types/categoryTypes";
import { updateExpense } from "@src/hooks/updateCollection/updateDocument";
import { deleteExpense } from "@src/hooks/deleteCollection/deleteExpense";
import dayjs from 'dayjs';
import { formatCurrencyVND, formatDescription } from "@src/utils/expense";

// Get the current date
const now = dayjs();

const CenteredContainer = styled.div`
  position: absolute; // Use absolute positioning
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // Center the spin
`;

export const TableTitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ImageWrapper = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`;

const initialExpense = {
    date: now.format('YYYY-MM-DD'),
    expense: "",
    description: "",
    categories: "",
};

export type TDialogMode = "create" | "edit" | "";
export const ExpenseTable = () => {
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRecord, setSelectedRecord] =
        useState<TExpense>(initialExpense);
    const [formData, setFormData] = useState<TExpense>({
        date: now.format('YYYY-MM-DD'),
        expense: "",
        description: "",
        categories: "",
        imageUrl: "",
    });
    const [mode, setMode] = useState<TDialogMode>("");
    const { data: expenses, loading: isGettingExpenses } = useGetCollection({ collectionName: "expenses", dependencies: [isLoading] }) as { data: TExpense[]; loading: boolean };
    const { data: categories, loading: isGettingCategories } = useGetCollection({ collectionName: "categories" }) as { data: Category[]; loading: boolean };

    const handleView = (record: TExpense) => {
        setSelectedRecord(record);
        setIsViewDialogOpen(true);
    };

    const handleEdit = (record: TExpense) => {
        setIsCreateDialogOpen(true);
        setMode("edit");
        console.log("record", record);
        setFormData({
            ...formData,
            ...record
        })
    }

    const handleViewOK = () => {
        setIsViewDialogOpen(false);
    };

    const handleViewCancel = () => {
        setIsViewDialogOpen(false);
    };

    const handleCreateSave = async (formData: TExpense) => {
        if (mode === "create") {
            setIsLoading(true);
            const data = await addData({
                formData: { ...formData, key: new Date().getTime().toString() },
                collectionName: "expenses"
            });
            setIsLoading(false);
            setIsCreateDialogOpen(false);
            setMode("");
            if (data && data.error) {
                return;
            }
        }
        if (mode === "edit") {
            setIsLoading(true);
            const data = await updateExpense({ ...formData, key: new Date().getTime().toString() });
            console.log("data", data);
            setIsLoading(false);
            setIsCreateDialogOpen(false);
            setMode("");

        }
    };

    const handleCreateCancel = () => {
        setIsCreateDialogOpen(false);
        setMode("");
    };

    const handleAddExpense = () => {
        setIsCreateDialogOpen(true);
        setMode("create");
        setFormData({
            date: now.format('YYYY-MM-DD'),
            expense: "",
            description: "",
            categories: "",
            imageUrl: "",
        });
    };

    const getCategoryById = (id: string) => {
        const matchedItem = categories.find(item => item.id === id);
        return matchedItem && matchedItem.name ? matchedItem.name : "";
    }

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        await deleteExpense(selectedRecord.id);
        message.success('Delete expense successfully!');
    };

    const cancel: PopconfirmProps['onCancel'] = () => { };

    const columns = [
        {
            title: "Thời gian",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Khoản chi",
            dataIndex: "expense",
            key: "expense",
            render: (text: string) => <>{formatCurrencyVND(text || "0")}</>,
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
            render: (text: string) => <>{formatDescription(text)}</>,
        },
        {
            title: "Danh mục",
            dataIndex: "categories",
            key: "categories",
            render: (text: string) => <strong>{getCategoryById(text)}</strong>,
        },
        {
            title: "Ảnh",
            dataIndex: "imageUrl",
            key: "imageUrl",
            render: (text: string) => text && <ImageWrapper src={text} alt="photo of expense" /> || <></>,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record: TExpense) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleView(record)}
                    />
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    />

                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            icon={<DeleteOutlined />}
                            onClick={() => setSelectedRecord(record)}
                        />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            {
                isLoading && <CenteredContainer><Spin /></CenteredContainer>
            }
            {
                !isLoading && (
                    <>
                        <Button type="primary" onClick={handleAddExpense}>
                            <PlusOutlined />
                            Thêm khoản chi
                        </Button>
                        <TableTitleWrapper>
                            <h2>Khoản chi</h2>
                        </TableTitleWrapper>
                        <Table
                            dataSource={expenses}
                            columns={columns}
                            style={{
                                overflow: "scroll",
                                // height: "60vh"
                            }} />
                        <ViewDialog
                            isOpen={isViewDialogOpen}
                            handleOk={handleViewOK}
                            handleCancel={handleViewCancel}
                            data={selectedRecord}
                            categories={categories}
                        />
                        <CreateExpenseDialog
                            isOpen={isCreateDialogOpen}
                            handleOk={handleCreateSave}
                            handleCancel={handleCreateCancel}
                            formData={formData}
                            setFormData={setFormData}
                            mode={mode}
                        />
                    </>
                )
            }
        </>
    );
};
