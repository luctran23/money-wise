import React, { useEffect, useState } from "react";
import { addData } from "@src/hooks/addToCollection/addData";
import { Button, message, Popconfirm, PopconfirmProps, Space, Spin, Table } from "antd";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { TWorkingTime } from "@src/types/workingTimeTypes";
import dayjs from "dayjs";

export const WorkingTime = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: timeHistory, loading: isGettingTime } = useGetCollection({ collectionName: "working-time", dependencies: [isLoading] }) as { data: any; loading: boolean };

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        // await deleteExpense(selectedRecord.id);
        message.success('Delete expense successfully!');
    };

    const cancel: PopconfirmProps['onCancel'] = () => { };

    const columns = [
        {
            title: "Thời gian",
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record: TWorkingTime) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                    // onClick={() => handleView(record)}
                    />
                    <Button
                        icon={<EditOutlined />}
                    // onClick={() => handleEdit(record)}
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
                        // onClick={() => setSelectedRecord(record)}
                        />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleTap = async () => {
        const now = dayjs();
        setIsLoading(true);
        const data = await addData({
            formData: { key: new Date().getTime().toString(), date: now.format('YYYY-MM-DD HH:mm:ss')},
            collectionName: "working-time"
        });
        setIsLoading(false);
        if (data && data.error) {
            return;
        }
    }

    return (
        <>
            <Button onClick={handleTap}>
                Tap
            </Button>
            {
                isLoading && (
                    <Spin />
                )
            }
            <Table dataSource={timeHistory} columns={columns} />

        </>
    )
}