import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { LogoIcon } from "@src/icons/Logo";
import { menuItems, MENU_ITEM_IDS } from "@src/constants";
import { ActiveContentContext } from "@src/context";

const { Sider } = Layout;

const LogoWrapper = styled.div`
    width: 100%;
    height: 13%;
    text-align: center;
    padding: 10px;
`;
export const Sidebar = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { setActiveMenuKey } = useContext(ActiveContentContext);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMenuItemClicked = (e: any) => {
        setActiveMenuKey(e.key);
    };

    return (
        <Layout style={{ minHeight: "100vh" }} className={className}>
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
                    defaultSelectedKeys={[MENU_ITEM_IDS.charts]}
                    mode="inline"
                    items={menuItems}
                    onClick={handleMenuItemClicked}
                />
            </Sider>
        </Layout>
    );
};
