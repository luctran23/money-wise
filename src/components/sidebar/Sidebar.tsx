import React, { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { LogoIcon } from "@src/icons/Logo";

const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Charts", "1", <PieChartOutlined />),
    getItem("Expense table", "2", <DesktopOutlined />),
    getItem("Lending Tracker", "3", <FileOutlined />),
];

const LogoWrapper = styled.div`
    width: 100%;
    height: 13%;
    text-align: center;
    padding: 10px;
`;
export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <LogoWrapper>
                    <LogoIcon />
                </LogoWrapper>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
        </Layout>
    );
};
