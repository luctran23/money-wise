import React from "react";
import { MenuProps } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const MENU_ITEM_IDS = {
    charts: "charts",
    expenseTable: "expense-table",
    lendingTracker: "lending-tracker",
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
        <>charts content</>,
    ),
    getItem(
        "Expense table",
        MENU_ITEM_IDS.expenseTable,
        <DesktopOutlined />,
        undefined,
        <>expense content</>,
    ),
    getItem(
        "Lending Tracker",
        MENU_ITEM_IDS.lendingTracker,
        <FileOutlined />,
        undefined,
        <>lending content</>,
    ),
];
