import React from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
    width: 100%;
    height: 50px;
    background: #3c3b6d;
    margin-bottom: 1px;
`;
const MenuItemText = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
`;

export const MenuItem = () => {
    return (
        <MenuItemWrapper>
            <MenuItemText>Menu item text</MenuItemText>
        </MenuItemWrapper>
    );
};
