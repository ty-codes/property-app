import { useState } from "react";
import styled from "styled-components";
import { briefcase } from "../assets";


interface IProps {
    bg?: string
}

export default function Calculator(): JSX.Element {
    const months = ['January', 'February',
        'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const [returns, ] = useState("0");

    return (
        <Wrapper>
            <Header bg={briefcase}>
                <h2>Investment Calculator</h2>
                <p>What's your investment goal? You can determine
                    how your money will grow over time with our free
                    investment calculator
                </p>
            </Header>
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
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 60%;

    h2 {
        color: white;
        font-size: 28px;
        font-weight: 800;
        text-transform: capitalize;
        margin: 0;
    }
`;

const Header = styled.span<IProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 150px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 10px;
    width: 100%;
    margin-top: 3em;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    p {
        color: white;
        font-size: 12px;
        font-weight: lighter;
        margin: 0;
    }
`;