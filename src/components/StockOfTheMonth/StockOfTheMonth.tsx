import { graph, dangote } from "../../assets";
import "./StockOfTheMonth.css";

const StockOfTheMonth = () => {
    var mover =  {
        image: dangote,
        name: "dangote",
        website: "dangote.com",
        price: "600"
    };

    return (
        <div className="stockofthemonth">
            <p>Stock of the month</p>
            <div className="stock">
                <div className="company">
                    <span className="logo">
                        <img src={mover.image} alt="company-logo" />
                    </span>
                    <div>
                        <h4>{mover.name}</h4>
                        <p>&#8358; {mover.price}</p>
                    </div>
                </div>
                <img src={graph} alt="graph" />
            </div>
        </div>
    )
};

export default StockOfTheMonth;