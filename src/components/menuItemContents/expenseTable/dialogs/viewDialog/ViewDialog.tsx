import React from "react";
import { TExpense } from "@src/types/expenseTypes";
import { Modal } from "antd";
import { FieldWrapper } from "../createExpenseDialog/createExpenseDialog";
import { formatCurrencyVND, getCategoryById } from "@src/utils/expense";
import { Category } from "@src/types/categoryTypes";

type ViewDialogProps = {
    data: TExpense;
    isOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    categories: Category[];
};

export const ViewDialog: React.FC<ViewDialogProps> = ({
    data,
    isOpen,
    handleOk,
    handleCancel,
    categories
}) => {
    return (
        <Modal
            title="Chi tiết khoản chi"
            open={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <FieldWrapper>
                <span>
                    <b>Thời gian: </b>
                </span>
                <span>{data.date}</span>
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Số tiền chi: </b>
                </span>
                <span>{formatCurrencyVND(data.expense || "0")}</span>
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Mô tả: </b>
                </span>
                <span>{data.description}</span>
                {
                    data.imageUrl && (
                        <div>
                            <img
                                src={data.imageUrl}
                                alt="photo description"
                                width={"100%"}
                                style={{
                                    height: "400px",
                                    objectFit: "contain"
                                }}
                            />
                        </div>
                    )
                }
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Danh mục: </b>
                </span>
                <span>{getCategoryById(data.categories, categories)}</span>
            </FieldWrapper>
        </Modal>
    );
};
