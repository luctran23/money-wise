import React from "react";
import { Avatar, Select } from "antd";
import { Layout as LayoutAntd, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { DatePicker } from "antd";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";

const { RangePicker } = DatePicker;

const { Header } = LayoutAntd;

const ProfileName = styled.span`
    margin-left: 5px;
    font-weight: 700;
`;
const FilterSection = styled.div`
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
`;
const ProfileSection = styled.div`
    margin-right: 10px;
`;
const SelectionWrapper = styled.div`
    margin-left: 10px;
`;
export const HeaderComponent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const {data: categories, loading: isGettingCategories} = useGetCollection({ collectionName: "categories" });


    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    const categoryOptions = categories.map(item => ({
        value: item.id,
        label: item.name
    }));

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <FilterSection>
                <div>
                    <RangePicker />
                </div>
                <SelectionWrapper>
                    <Select
                        showSearch
                        placeholder="Chọn danh mục"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        style={{
                            minWidth: "120px",
                        }}
                        options={categoryOptions}
                    />
                </SelectionWrapper>
            </FilterSection>
            <ProfileSection>
                <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                />
                <ProfileName>Travis Noah</ProfileName>
            </ProfileSection>
        </Header>
    );
};
