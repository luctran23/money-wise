import { menuItems } from "@src/constants";
import { ActiveContentContext } from "@src/context";
import React, { useContext, useEffect, useState } from "react";

export const ActiveMenuContent = () => {
    const [activeContent, setActiveContent] = useState<React.ReactNode>(<></>);
    const { activeMenuKey } = useContext(ActiveContentContext);

    useEffect(() => {
        const matchedMenuItem = menuItems.find(
            (item) => item?.key === activeMenuKey,
        );
        if (matchedMenuItem && matchedMenuItem.content) {
            setActiveContent(matchedMenuItem.content);
        }
    }, [activeMenuKey]);
    return <>{activeContent}</>;
};
