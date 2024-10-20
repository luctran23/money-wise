import React from "react";
import { MenuProps } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserSwitchOutlined,
    DollarCircleOutlined,
} from "@ant-design/icons";
import { Charts } from "@src/components/menuItemContents/charts/Charts";
import { ExpenseTable } from "@src/components/menuItemContents/expenseTable/ExpenseTable";
import { DebtorTracker } from "@src/components/menuItemContents/debtorTracker/DebtorTracker";

type MenuItem = Required<MenuProps>["items"][number];

export const MENU_ITEM_IDS = {
    charts: "charts",
    expenseTable: "expense-table",
    lendingTracker: "lending-tracker",
    debtorTracker: "debtor-tracker",
};

type ExtraMenuItemType = {
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItem[];
    content?: React.ReactNode;
};

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    content?: React.ReactNode,
): ExtraMenuItemType => {
    return {
        key,
        icon,
        children,
        label,
        content,
    };
};
export const menuItems: ExtraMenuItemType[] = [
    getItem(
        "Charts",
        MENU_ITEM_IDS.charts,
        <PieChartOutlined />,
        undefined,
        <Charts />,
    ),
    getItem(
        "Expense table",
        MENU_ITEM_IDS.expenseTable,
        <DesktopOutlined />,
        undefined,
        <ExpenseTable />,
    ),
    getItem(
        "Debtor Tracker",
        MENU_ITEM_IDS.debtorTracker,
        <UserSwitchOutlined />,
        undefined,
        <DebtorTracker />,
    ),
    getItem(
        "Loan Manager",
        MENU_ITEM_IDS.lendingTracker,
        <DollarCircleOutlined />,
        undefined,
        <>Loan Manager</>,
    ),
];
