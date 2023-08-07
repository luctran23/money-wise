import React from "react";
import { Home } from "@src/pages/Home";
import { NotFound } from "@src/pages/NotFound";
import { Login } from "@src/pages/Login";
import { TRoutes } from "@src/types/routeTypes";
import { Navigate } from "react-router-dom";
import { AuthService } from "./AuthService";

export const PrivateRoute: React.FC<{
    children: JSX.Element;
}> = ({ children }) => {
    const isAuthenticated = AuthService.isAuthenticated();

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};
export const routes: TRoutes[] = [
    {
        path: "/",
        component: (
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
        ),
    },
    {
        path: "/login",
        component: <Login />,
    },
    {
        path: "*",
        component: <NotFound />,
    },
];
