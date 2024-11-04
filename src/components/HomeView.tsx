import React from "react";
import { Layout } from "./Layout";
import { Breadcrumb, Layout as LayoutAntd, theme } from "antd";
import { ActiveMenuContent } from "@src/components/activeMenuContent/ActiveMenuContent";
import { ActiveContentProvider, MobileSidebarProvider } from "@src/context";

const { Content } = LayoutAntd;
export const HomeView = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <ActiveContentProvider>
            <MobileSidebarProvider>
                <Layout>
                    <LayoutAntd>
                        <Content style={{ margin: "0 16px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                            <div
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                    background: colorBgContainer,
                                }}
                            >
                                <ActiveMenuContent />
                            </div>
                        </Content>
                    </LayoutAntd>
                </Layout>
            </MobileSidebarProvider>
        </ActiveContentProvider>
    );
};
