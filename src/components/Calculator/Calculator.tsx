import { useState } from "react";
import "./Calculator.css";

export default function Calculator(): JSX.Element {
    const months = ['January', 'February',
        'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const [returns, setReturns] = useState("0");

    return (
        <div className="calculator">
            <span className="header">
                <h2>Investment Calculator</h2>
                <p>What's your investment goal? You can determine
                    how your money will grow over time with our free
                    investment calculator
                </p>
            </span>
            <div>
                <label>Investing</label>
                <input type="text" placeholder={`0.00`} />

                <label>In</label>
                <input type="text" placeholder={`First Bank Co.`} />

                <label>For</label>
                <input type="text" placeholder={`0`} />

                <select placeholder={`Month`}>
                    {months?.map((month, id) => (
                        <option key={`month-op-${id}`}>{month}</option>
                    ))}
                </select>

                <label>Gives You</label>
                <h2 className="returns">{returns}</h2>

                <button type="submit" className="filled">Calculate</button>

            </div>
        </div>
    )
}