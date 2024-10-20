import { Modal } from "antd";
import React, { useState } from "react";
import { Resizable, ResizableProps } from "react-resizable";
import "react-resizable/css/styles.css";

export const ResizableModal: React.FC<{
    open: boolean;
    onCancel: () => void;
    children: React.ReactNode;
}> = ({ open, onCancel, children }) => {
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(200);

    const handleResize: ResizableProps["onResize"] = (event, { size }) => {
        setWidth(size.width);
        setHeight(size.height);
    };

    return (
        <Modal open={open} onCancel={onCancel} footer={null} width={width}>
            <Resizable
                width={width}
                height={height}
                onResize={handleResize}
                maxConstraints={[500, 300]}
            >
                <div style={{ width: `${width}px`, height: `${height}px` }}>
                    {children}
                </div>
            </Resizable>
        </Modal>
    );
};
