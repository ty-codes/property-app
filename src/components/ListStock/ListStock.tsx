import { ScheduleOutlined, ShareAltOutlined } from "@ant-design/icons";
import { ListStockImages, ListStockDocuments, ListStockDetails, ListStockDescription, ListStockCategory, ListStockReview } from "..";
import { device } from "../../constants";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export default function ListStock() {
    const isMobile = useMediaQuery({maxWidth: 490});

    return (
        <div>
            <Header>Add/List Stocks</Header>

            <Wrapper>

                <section className="section">
                    <ListStockDescription />
                    <ListStockCategory />
                    <ListStockDocuments />
                </section>

                <section className="section">
                    <ListStockImages />
                    <ListStockDetails />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="filled"  ><ScheduleOutlined />Schedule date</button>
                        <button className="outlined"><ShareAltOutlined />Share</button>
                    </div>

                    <br />
                    <ListStockReview />
                </section>
            </Wrapper>
            <ButtonWrap>
                <button className="list-button"  >List Property</button>
            </ButtonWrap>

        </div>

    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: left;

    @media (max-width: 820px) {
        flex-wrap: wrap;
    }

    @media (max-width: 490px) {
        .ReactModal__Content, .ReactModal__Content--after-open {
            max-width: 100% !important;
            inset: 0 !important;
        }
    }

    // @media ${device.mobileL} {
    //     width: 80%;
    //     margin: auto;
    // }

    // @media ${device.mobileS} {
    //     width: 70%;
    // }

    .section {
        width: 48%;
        height: 100%;
        text-align: left;

        @media (max-width: 820px) {
            width: 100%;
        }
    }

    h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        text-transform: capitalize;
        color: #464646;
    }

    h5 {
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;
        text-align: left;    
        color: #464646;
    }

    .filled {
        padding: 10px 20px;
        width: 14em;
        margin: 0.5em;
        background-color: #1363ff;
        color: #fff;
        outline: none;
        border: none;
        font-size: 13px;
        border-radius: 4px;

        svg {
            margin: 0 1em 0.5em 1em;
        }
    }

    .outlined{
        font-size: 13px;
        padding: 10px 20px;
        width: 14em;
        margin: 0.5em;
        background-color: #fff;
        color: #1363ff;
        outline: none;
        border: 1px solid #1363ff;
        border-radius: 4px;

        svg {
            margin: 0 1em 0.5em 1em;
        }
    }

    
`;

const Header = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    text-align: left;
    text-transform: capitalize;
    color: #464646;

    // @media ${device.mobileL} {
    //     width: 80%;
    //     margin: auto;
    // }

    // @media ${device.mobileS} {
    //     width: 70%;
    // }
`;

const ButtonWrap = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;

    .list-button{
        padding: 10px 20px;
        width: 14em;
        margin: 0.5em;
        background-color: #1363ff;
        color: #fff;
        outline: none;
        border: none;
        font-size: 13px;
        border-radius: 4px;
        margin: 2em 0;
        align-self: center;
    }
`