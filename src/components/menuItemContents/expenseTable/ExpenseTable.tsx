import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import styled from "styled-components";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TExpense } from "@src/types/expenseTypes";
import { ViewDialog } from "./dialogs/viewDialog/ViewDialog";
import { PlusOutlined } from "@ant-design/icons";

const TableTitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;
const initialExpense = {
    date: "",
    expense: "",
    description: "",
    categories: "",
};

export const ExpenseTable = () => {
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] =
        useState<TExpense>(initialExpense);

    const dataSource: TExpense[] = [
        {
            key: "1",
            date: new Date().getFullYear().toString(),
            expense: "1000",
            description: "Mua sách",
            categories: "mua sắm",
        },
        {
            key: "2",
            date: new Date().getFullYear().toString(),
            expense: "2000",
            description: "Ăn cơm trưa",
            categories: "ăn uống",
        },
    ];
    const handleView = (record: TExpense) => {
        setSelectedRecord(record);
        setIsViewDialogOpen(true);
    };

    const handleViewOK = () => {
        setIsViewDialogOpen(false);
    };

    const handleViewCancel = () => {
        setIsViewDialogOpen(false);
    };
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
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Danh mục",
            dataIndex: "categories",
            key: "categories",
        },
        {
            title: "Actions",
            key: "actions",
            render: (text, record: TExpense) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleView(record)}
                    />
                    <Button
                        icon={<EditOutlined />}
                        // onClick={() => handleEdit(record)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        // onClick={() => handleDelete(record)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Button type="primary">
                <PlusOutlined />
                Thêm khoản chi
            </Button>
            <TableTitleWrapper>
                <h2>Khoản chi trong tháng 9 năm 2023</h2>
            </TableTitleWrapper>
            <Table dataSource={dataSource} columns={columns} />
            <ViewDialog
                isOpen={isViewDialogOpen}
                handleOk={handleViewOK}
                handleCancel={handleViewCancel}
                data={selectedRecord}
            />
        </>
    );
};
