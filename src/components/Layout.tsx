import React, { ReactNode } from "react";
import styled from "styled-components";
import { Sidebar } from "@src/components/sidebar/Sidebar";
import { Header } from "./header/Header";

type LayoutProps = {
    children: ReactNode;
};

const LayoutWrapper = styled.div`
    display: flex;
`;
const LeftNav = styled.div``;
const RightNav = styled.div`
    width: 100%;
`;
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutWrapper>
            <LeftNav>
                <Sidebar />
            </LeftNav>
            <RightNav>
                <Header />
                <div>{children}</div>
            </RightNav>
        </LayoutWrapper>
    );
};
