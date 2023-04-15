import { PlusOutlined } from "@ant-design/icons";
import { dangote, gtb, fbn, oando } from "../assets";
import styled from "styled-components";

export default function Stocks() {
    const placeholder = [
        {
            image: dangote,
            name: "access corp",
            website: "dangote.com",
            price: "600",
            company: "access holdings plc"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600",
            company: "first bank holding company"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600",
            company: "guaranty trust bank holding company"
        },
        {
            image: oando,
            name: "MTN",
            website: "firstbankofnigeria.com",
            price: "1200",
            company: "MTN Nigeria PLC(MTNN)"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600",
            company: "first bank holding company"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600",
            company: "guaranty trust bank holding company"
        },
        {
            image: oando,
            name: "MTN",
            website: "firstbankofnigeria.com",
            price: "1200",
            company: "MTN Nigeria PLC(MTNN)"
        },
    ]
    return (
        <Wrapper>
            {placeholder?.map((stock, key) => (
                <Stock>
                    <img className="company-logo" src={stock.image} alt="company_logo" />
                    <h3 className="name">{stock.name}</h3>
                    <p className="company">{stock.company}</p>
                    <span className="list"><h3 className="price">&#8358; {stock.price}</h3><p className="small_text">Minimum</p></span>
                    <span className="list"><h3 className="percent">7%</h3><p className="small_text">Per Year</p></span>
                    <button>Add to Cart <PlusOutlined /></button>
                </Stock>


            ))}
        </Wrapper>

    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    overflow-x: auto;
    padding-bottom: 0.8em;
    cursor: pointer;

    @media (max-width: 850px) {
        display: -webkit-box;
        overflow-x: auto;

    }

`

const Stock = styled.div`
    padding: 20px;
    border: 0.8px solid #c5d8ff;
    border-radius: 8px;
    width: 250px;
    height: 300px;
    position: relative;
    margin: 0 0.8em 0 0;
    flex-shrink: 0;

    h3 {
        font-weight: 500;
        font-size: 17px;
        line-height: 18px;
        text-align: left;
        text-transform: uppercase;
        color: #272728;
        text-overflow: ellipsis;
        margin: 0;
    }

    .name {
        margin: 0.8em 0;
    }

    .company-logo {
        width: 50px;
        height: 50px;
        padding: 5px;
        border: 1px solid #c5d8ff;
        border-radius: 5px;
    }

    .company {
        font-weight: 400;
        font-size: 11px;
        text-overflow: ellipsis;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
        color: #464646;
        /* margin: 0.8em 0; */
        
    }

    .price {
        color: #263238;
    }

    .list {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    
    .percent {
        font-weight: 500;
        font-size: 31.9236px;
        line-height: 32px;
        text-align: center;
        text-transform: capitalize;
        color: #17DF4D;
    }

    .small_text {
        font-weight: 500;
        font-size: 10px;
        /* text-align: center; */
        text-transform: capitalize;
        color: #979797;
    }

    button {
        justify-content: flex-end;
        align-items: center;
        padding: 12px 50px;
        gap: 10px;
        background: #1363FF;
        border: 0.8px solid #1363FF;
        border-radius: 5px;
        font-size: 10px;
        color: #fff;
        align-items: baseline;
        border: none;
        position: absolute;
        bottom: 10px;
    }

    @media (max-width: 850px) {
        width: 220px;
    }
`;