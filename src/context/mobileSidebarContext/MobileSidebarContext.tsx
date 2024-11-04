import { MENU_ITEM_IDS } from "@src/constants";
import React, { createContext, useState } from "react";

type MobileSidebarType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const initialMobileSidebarContext = {
    isOpen: false,
    setIsOpen: () => {},
};

export const MobileSidebarContext = createContext<MobileSidebarType>(
    initialMobileSidebarContext,
);

type MobileSidebarProviderProps = {
    children: React.ReactNode;
};
export const MobileSidebarProvider: React.FC<MobileSidebarProviderProps> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MobileSidebarContext.Provider
            value={{
                isOpen: isOpen,
                setIsOpen: setIsOpen,
            }}
        >
            {children}
        </MobileSidebarContext.Provider>
    );
};
