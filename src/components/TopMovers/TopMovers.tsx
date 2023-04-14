import "./TopMovers.css";
import { dangote, gtb, fbn, oando } from "../../assets";
import { FastArrowDown } from "../../assets/svg";

export default function TopMovers() {
    const movers = [
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: dangote,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600"
        },
        {
            image: oando,
            name: "oando",
            website: "oandoplc.com",
            price: "600"
        },
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },
        // {
        //     image: gtb,
        //     name: "GTCO",
        //     website: "gtbank.com",
        //     price: "600"
        // },
        // {
        //     image: oando,
        //     name: "oando",
        //     website: "oandoplc.com",
        //     price: "600"
        // },
    ]
    return (
        <div className="top-movers">
            <p className="movers-header">Top Movers</p>
            <div className="movers">
                {movers.map((mover, key) => (
                    <div className="mover" key={`top-movers-${key}`}>
                        <div className="margin">
                            <span className="arrow"><FastArrowDown /></span>
                            <p className="percentage">88.60%</p>
                        </div>
                        <div className="company">
                            <span className="logo">
                                <img src={mover.image} alt="company-logo" />
                            </span>
                            <div>
                                <h4>{mover.name}</h4>
                                <p>{mover.website}</p>
                            </div>
                        </div>

                        <h5>&#8358; {Number(mover.price).toFixed(2)}</h5>

                    </div>
                ))}
            </div>
        </div>
    )
}