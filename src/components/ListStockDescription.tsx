import { FolderAddOutlined } from "@ant-design/icons";
import { CustomInput } from ".";
import styled from "styled-components";


export default function ListStockDescription() {
    return (
        <Wrapper>
            <h3>Description</h3>
            <DescriptionWrapper>
                <h5>Product name</h5>
                <CustomInput
                    type="text"
                />
                <ProductDescription>
                    <h5>Product Description</h5>
                    <span>
                        <FolderAddOutlined />
                        <span>Upload .txt file</span>
                    </span>
                </ProductDescription>

                <CustomInput
                    type="textarea"
                />
            </DescriptionWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin: 2.5em 0;
`;

const DescriptionWrapper = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;

    span {
        font-weight: 700;
        font-size: 11px;
        line-height: 11px;
        text-align: right;
        color: #1363FF;
        display: flex;
        gap: 5px;
    }

    input {
        margin-bottom: 1em;
    }

    div {
        margin: 0;
        width: 100%;
        margin-bottom: 1em;
      }
`;

const ProductDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    margin: 0;
    width: 100%;

    @media (max-width: 820px) {
        max-width: 100%;
    }
`;