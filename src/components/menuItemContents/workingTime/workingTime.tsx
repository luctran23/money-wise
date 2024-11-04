import React, { useState } from "react";
import { addData } from "@src/hooks/addToCollection/addData";
import { Button, Spin, Table } from "antd";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import dayjs from "dayjs";
import { getWorkingTimeDataSource, groupTimeByDate } from "@src/utils/workingTime";
import { TableTitleWrapper } from "../expenseTable/ExpenseTable";

export const WorkingTime = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: timeHistory, loading: isGettingTime } = useGetCollection({ collectionName: "working-time", dependencies: [isLoading] }) as { data: any; loading: boolean };

    const dataSource = getWorkingTimeDataSource(timeHistory);
    const columns = [
        {
            title: "Thời gian",
            dataIndex: "createdDay",
            key: "createdDay",
        },
        {
            title: "Giờ đến",
            dataIndex: "checkIn",
            key: "checkIn",
        },
        {
            title: "Giờ về",
            dataIndex: "checkOut",
            key: "checkOut",
        },
    ];

    const handleTap = async () => {
        const now = dayjs();
        setIsLoading(true);
        const data = await addData({
            formData: { key: new Date().getTime().toString(), date: now.format('YYYY-MM-DD HH:mm:ss') },
            collectionName: "working-time"
        });
        setIsLoading(false);
        if (data && data.error) {
            return;
        }
    }

    return (
        <>
            <Button onClick={handleTap} style={{ marginBottom: "20px" }}>
                Tap
            </Button>
            <TableTitleWrapper>
                <h2>Lịch sử chấm công</h2>
            </TableTitleWrapper>
            {
                isLoading && (
                    <Spin />
                )
            }
            <Table dataSource={dataSource} columns={columns} />

        </>
    )
}