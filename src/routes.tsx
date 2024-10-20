import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "./routesConfig";
import { TRoutes } from "@src/types/routeTypes";
import { NotFound } from "@src/pages/NotFound";

export const AppRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            {routes.map((route: TRoutes, i) => (
                <Route
                    key={i}
                    path={route.path}
                    element={route.component}
                ></Route>
            ))}
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
};
