import { TExpense } from "@src/types/expenseTypes";
import { Modal } from "antd";
import React from "react";

type ViewDialogProps = {
    data: TExpense;
    isOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

export const ViewDialog: React.FC<ViewDialogProps> = ({
    data,
    isOpen,
    handleOk,
    handleCancel,
}) => {
    return (
        <Modal
            title="Chi tiết khoản chi"
            open={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <div>
                <span>
                    <b>Thời gian: </b>
                </span>
                <span>{data.date}</span>
            </div>
            <div>
                <span>
                    <b>Số tiền chi: </b>
                </span>
                <span>{data.expense}VND</span>
            </div>
            <div>
                <span>
                    <b>Mô tả: </b>
                </span>
                <span>{data.description}</span>
                <img
                    src="https://b-f9-zpcloud.zdn.vn/2561346419105129542/3e4229f66f6cbc32e57d.jpg"
                    alt="photo description"
                    width={"100%"}
                />
            </div>
            <div>
                <span>
                    <b>Danh mục: </b>
                </span>
                <span>{data.categories}</span>
            </div>
        </Modal>
    );
};
