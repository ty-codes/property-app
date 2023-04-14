import { FastArrowDown } from "../../assets/svg";
import "./Stock.css";


export interface IStock {
    image?: string,
    name?: string,
    website?: string,
    price?: string
}

export default function Stock({ stock }: { stock: IStock }) {
    return (
        <div className="sg-stock" key={`top-stocks-`}>
            <div className="margin">
                <span className="arrow"><FastArrowDown /></span>
                <p className="percentage">88.60%</p>
            </div>
            <div className="company">
                <span className="logo">
                    <img src={stock?.image} alt="company-logo" />
                </span>
                <div>
                    <h4>{stock?.name}</h4>
                    <p>{stock?.website}</p>
                </div>
            </div>

            <h5>{Number(stock.price).toFixed(2)}</h5>

        </div>
    )
}