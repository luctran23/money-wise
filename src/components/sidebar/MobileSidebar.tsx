import React, { useContext } from "react";
import styled from "styled-components";
import { LogoIcon } from "@src/icons/Logo";
import { CloseOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { menuItems, MENU_ITEM_IDS } from "@src/constants";
import { ActiveContentContext, MobileSidebarContext } from "@src/context";

const MobileSidebarWrapper = styled.div`
    position: fixed;
    width: 222px;
    height: 100vh;
    padding: 10px;
    background: #001529;
    color: #fff;
    z-index: 11;
`;

const HeaderWrapper = styled.div`
    text-align: right;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 13%;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
`;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;
export const MobileSidebar = ({ className }) => {
    const { setActiveMenuKey } = useContext(ActiveContentContext);
    const { isOpen, setIsOpen } = useContext(MobileSidebarContext);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMenuItemClicked = (e: any) => {
        setActiveMenuKey(e.key);
    };
    return (
        <>
            {
                isOpen && <Overlay />
            }
            <MobileSidebarWrapper className={className}>
                <HeaderWrapper>
                    <CloseOutlined onClick={() => setIsOpen(false)} />
                </HeaderWrapper>
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
            </MobileSidebarWrapper>
        </>
    )
}