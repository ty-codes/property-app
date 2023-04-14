import { PlusOutlined } from "@ant-design/icons";
import { dangote, gtb, fbn, oando } from "../../assets";
import "./Stocks.css";

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
        <div className="stocks">
            {placeholder?.map((stock, key) => (
                <div className="stock">
                    <img className="company-logo" src={stock.image} alt="company_logo" />
                    <h3 className="name">{stock.name}</h3>
                    <p className="company">{stock.company}</p>
                    <span className="list"><h3 className="price">&#8358; {stock.price}</h3><p className="small_text">Minimum</p></span>
                    <span className="list"><h3 className="percent">7%</h3><p className="small_text">Per Year</p></span>
                    <button>Add to Cart <PlusOutlined /></button>
                </div>


            ))}
        </div>

    )
}