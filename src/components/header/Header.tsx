import React, { useContext } from "react";
import { Avatar, Select } from "antd";
import { Layout as LayoutAntd } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { DatePicker } from "antd";
import { useGetCollection } from "@src/hooks/useGetCollection/useGetCollection";
import { MobileSidebarContext } from "@src/context";

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
const HamburgerWrapper = styled.div``;

const HeaderWrapper = styled(Header)`
    padding: 16px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    .menu-fold-icon {
        display: none;
    }
    @media (max-width: 768px) {
        .menu-fold-icon {
            display: block;
        }
    }
`;
export const HeaderComponent = () => {
    const { setIsOpen } = useContext(MobileSidebarContext);
    const { data: categories, loading: isGettingCategories } = useGetCollection({ collectionName: "categories" });


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
        <HeaderWrapper>
            <HamburgerWrapper className="menu-fold-icon">
                <MenuOutlined onClick={() => setIsOpen(true)}/>
            </HamburgerWrapper>
            <FilterSection>
                {/* <div>
                    <RangePicker size="small" />
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
                </SelectionWrapper> */}
            </FilterSection>
            <ProfileSection>
                <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                />
                <ProfileName>Trần Ngọc Lực</ProfileName>
            </ProfileSection>
        </HeaderWrapper>
    );
};
