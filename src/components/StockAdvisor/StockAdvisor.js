import "./StockAdvisor.css";
import { AdvisorLogo } from "../../assets/svg";
import {briefcase} from "../../assets";

export default function StockAdvisor() {
    return (
        <div className="stock-advisor">
            <div className="main">
                <span>
                    <AdvisorLogo />
                    <p>Stock Advisor</p>
                </span>
                <h2>get a stock advisor for free</h2>
            </div>

            {/* <img src={briefcase} alt="briefcase" /> */}
        </div>
    )
}