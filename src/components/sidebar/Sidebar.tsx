import { LogoIcon } from "@src/icons/Logo";
import { LogoutIcon } from "@src/icons/LogoutIcon";
import React from "react";
import styled from "styled-components";
import { MenuItem } from "../menu/MenuItem";

const SidebarWrapper = styled.div`
    height: 100vh;
    width: 250px;
    background: #cb8e6b;
`;
const LogoWrapper = styled.div`
    width: 100%;
    height: 13%;
    text-align: center;
    padding: 10px;
`;
const MenuItemListWrapper = styled.div`
    height: 82%;
`;

const LogoutSection = styled.div`
    text-align: center;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
        width: 30px;
    }
`;
export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <LogoWrapper>
                <LogoIcon />
            </LogoWrapper>
            <MenuItemListWrapper>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </MenuItemListWrapper>
            <LogoutSection>
                <LogoutIcon /> Đăng xuất
            </LogoutSection>
        </SidebarWrapper>
    );
};
