import { MENU_ITEM_IDS } from "@src/constants";
import React, { createContext, useState } from "react";

type ActiveContentType = {
    activeMenuKey: string;
    setActiveMenuKey: (value: string) => void;
};

const initialActiveContentContext = {
    activeMenuKey: "",
    setActiveMenuKey: () => {},
};

export const ActiveContentContext = createContext<ActiveContentType>(
    initialActiveContentContext,
);

type ActiveContentProviderProps = {
    children: React.ReactNode;
};
export const ActiveContentProvider: React.FC<ActiveContentProviderProps> = ({
    children,
}) => {
    const [activeKey, setActiveKey] = useState(MENU_ITEM_IDS.charts);
    return (
        <ActiveContentContext.Provider
            value={{
                activeMenuKey: activeKey,
                setActiveMenuKey: setActiveKey,
            }}
        >
            {children}
        </ActiveContentContext.Provider>
    );
};
