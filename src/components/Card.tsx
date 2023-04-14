import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { StatDownIcon } from "../assets/svg";
import background from "../assets/card-bg.png";
import styled from "styled-components";
import { device } from "../constants";

interface IWrapper {
    bg?: string
} 

export default function Card() {
    const [currency, setCurrency] = useState("naira");

    return (
        <Wrapper bg={background}>
            <Currencies>
                <span
                style={{
                    backgroundColor: currency==="naira" ? "white" : "transparent",
                    color: currency==="naira" ? "#1363ff" : "#fff"
                }}
                 onClick={() => setCurrency("naira")}>Naira &#8358;</span>
                <span
                 style={{
                    backgroundColor: currency==="dollars" ? "white" : "transparent",
                    color: currency==="dollars" ? "#1363ff" : "#fff"
                }}
                onClick={() => setCurrency("dollars")}>Dollars $</span>
                <span
                 style={{
                    backgroundColor: currency==="euro" ? "white" : "transparent",
                    color: currency==="euro" ? "#1363ff" : "#fff"
                }}
                onClick={() => setCurrency("euro")}>Euro E</span>
            </Currencies>

            <Details>
                <div>
                    <h3>Net Worth</h3>
                    <h2>{currency === "naira" ? "N" : currency === "euro" ? "E" : currency === "dollars" ? "$" : "N"}</h2>
                    <h2>1, 000, 000</h2>
                    <div className="outlined">Deposit <PlusOutlined /> </div>
                </div>

                <div>
                    <h3>Cash Balance</h3>
                    <h2>{currency === "naira" ? "N" : currency === "euro" ? "E" : currency === "dollars" ? "$" : "N"}</h2>
                    <h2>500, 000</h2>
                    <div className="filled">Invest <StatDownIcon /> </div>
                </div>
            </Details>
        </Wrapper>
    )
};

const Wrapper = styled.div<IWrapper>`
    flex-grow: 1;
    background-color: ${props => props.theme.primaryColor};
    background-image: url(${props => props.bg});
    border-radius: 10px;
    color: white;
    // height: 280px; 
    margin: 1em;
    position: relative;

    @media (min-width: 1100px) {
        width: 31%;
    }
    
    @media (max-width: 520px) {
        margin: 1em 0;       
     }
`;

const Currencies = styled.div`
    display: flex;
    justify-content: flex-end;

    span {
        margin: 1em;
        color: #fff;
        font-weight: 700;
        border: 1px solid #fff;
        font-size: 12px;
        border-radius: 10px;
        padding: 8px 13px;

        @media ${device.mobileM} {
            font-size: 10px;
         }
    }
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .outlined {
        border: 1px solid ${props => props.theme.primaryColor};
        background-color: #fff;
        color: ${props => props.theme.primaryColor};
        font-weight: 600;
        font-size: 14px;
        width: 11em;
        text-align: center;
        padding: 8px 0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
        // position: absolute;
        // bottom: 10px; 

        @media ${device.mobileM} {
           width: 8em;
        }
    }

    .filled {
        border: 1px solid #fff;
        background-color: ${props => props.theme.primaryColor};
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        width: 11em;
        text-align: center;
        padding: 8px 0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        // position: absolute;
        // bottom: 10px;

        @media ${device.mobileM} {
            width: 8em;
        }
    }

    svg {
        height: 16px;
    }

    h3 {
        color: white;
        font-size: 15px;

        @media ${device.mobileM} {
            font-size: 13px;
         }
    }

    h2 {
        font-weight: 700;

        @media ${device.mobileM} {
            font-size: 14px;
         }
    }

`