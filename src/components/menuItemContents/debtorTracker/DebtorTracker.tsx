import { Table } from "antd";
import React from "react";
import styled from "styled-components";

const TableTitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;
export const DebtorTracker = () => {
    const dataSource = [
        {
            key: "1",
            date: new Date().getFullYear(),
            loanAmount: 1000,
            description: "vay tiêu dùng",
            debtor: "Trần Văn A",
            status: "pending",
        },
        {
            key: "2",
            date: new Date().getFullYear(),
            loanAmount: 3000,
            description: "vay tiêu dùng",
            debtor: "Trần Văn B",
            status: "paid",
        },
    ];

    const columns = [
        {
            title: "Thời gian",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Khoản cho vay",
            dataIndex: "loanAmount",
            key: "loanAmount",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Người nợ tiền",
            dataIndex: "debtor",
            key: "debtor",
        },
        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
        },
    ];

    return (
        <>
            <TableTitleWrapper>
                <h2>
                    Khoản tiền cho vay
                </h2>
            </TableTitleWrapper>
            <Table dataSource={dataSource} columns={columns} />
        </>
    );
};
