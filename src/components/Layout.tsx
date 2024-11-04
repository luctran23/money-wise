import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { Sidebar } from "@src/components/sidebar/Sidebar";
import { HeaderComponent } from "./header/Header";
import { MobileSidebar } from "@src/components/sidebar/MobileSidebar";
import { MobileSidebarContext } from "@src/context";

type LayoutProps = {
    children: ReactNode;
};

const LayoutWrapper = styled.div<{ isMobileSidebarOpen: boolean; }>`
    display: flex;
    .mobile-sidebar {
        display: ${({ isMobileSidebarOpen }) => isMobileSidebarOpen ? "block" : "none" };
    }
    @media (max-width: 768px) {
        .sidebar {
            display: none;
        }
    }
`;

const LeftNav = styled.div``;
const RightNav = styled.div`
    width: 100%;
`;
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isOpen } = useContext(MobileSidebarContext);

    return (
        <LayoutWrapper isMobileSidebarOpen={isOpen}>
            <LeftNav>
                <Sidebar className="sidebar" />
                <MobileSidebar className="mobile-sidebar" />
            </LeftNav>
            <RightNav>
                <HeaderComponent />
                <div>{children}</div>
            </RightNav>
        </LayoutWrapper>
    );
};
