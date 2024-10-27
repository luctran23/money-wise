import React, { ChangeEvent, useEffect, useState } from "react";
import { DatePicker, DatePickerProps, Input, Modal, Select } from "antd";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import ImageUpload from "@src/components/imageUpload/ImageUpload";
import { TExpense } from "@src/types/expenseTypes";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import { TDialogMode } from "../../ExpenseTable";

dayjs.extend(weekday); 
dayjs.extend(localeData);

export const FieldWrapper = styled.div`
    margin-bottom: 10px;
`;

type CreateExpenseDialogProps = {
    isOpen: boolean;
    handleOk: (value: TExpense) => void;
    handleCancel: () => void;
    formData: TExpense;
    setFormData: (value: TExpense) => void;
    mode: TDialogMode;
}

export const CreateExpenseDialog: React.FC<CreateExpenseDialogProps> = ({ isOpen, handleOk, handleCancel, formData, setFormData, mode }) => {
    const [imageUrl, setImageUrl] = useState('');
    const { data: categories } = useGetCollection({ collectionName: "categories" });

    useEffect(() => {
        setImageUrl(formData.imageUrl || "");
    }, [isOpen]);

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setFormData({
            ...formData,
            date: dateString
        });
    };
    const handleChangeCategories = (cateId: string) => {
        setFormData({
            ...formData,
            categories: cateId
        });
    };
    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            expense: e.target.value || ""
        });
    };

    const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            description: e.target.value || ""
        });
    };

    const categoryOptions = categories.map(item => ({
        value: item.id,
        label: item.name
    }));

    return (
        <Modal
            title={`${mode === "create" ? "Tạo" : "Sửa"} khoản chi`}
            open={isOpen}
            onOk={() => handleOk({...formData, imageUrl})}
            onCancel={handleCancel}
        >
            <FieldWrapper>
                <span>
                    <b>Thời gian: </b><br />
                </span>
                <DatePicker onChange={onChange} defaultValue={dayjs(formData.date)}/>
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Số tiền chi: </b>
                </span>
                <Input placeholder="Nhập số tiền" id="amount" name="amount" value={formData.expense} onChange={onAmountChange} />
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Mô tả: </b>
                </span>
                <TextArea rows={4} id="description" value={formData.description} onChange={onDescriptionChange} />
            </FieldWrapper>
            <FieldWrapper>
                <span>
                    <b>Danh mục: </b>
                </span>
                <Select
                    showSearch
                    placeholder="Chọn danh mục"
                    optionFilterProp="value"
                    onChange={handleChangeCategories}
                    onSearch={onSearch}
                    style={{
                        minWidth: "120px",
                    }}
                    value={formData.categories}
                    options={categoryOptions}
                />
            </FieldWrapper>
            <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </Modal>
    )
}