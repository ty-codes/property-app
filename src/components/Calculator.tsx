import { useState } from "react";
import styled from "styled-components";
import { briefcase } from "../assets";
import { device } from "../constants";
import CustomInput from "./CustomInput";


interface IProps {
    bg?: string
}

export default function Calculator(): JSX.Element {
    const months = ['January', 'February',
        'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const [returns,] = useState("0");

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
                <Row>
                    <label>Investing</label>
                    <CustomInput type="text" placeholder={`0.00`} />

                </Row>

                <Row>
                    <label>In</label>
                    <CustomInput type="text" placeholder={`First Bank Co.`} />

                </Row>

                <Row id="for">
                    <label>For</label>
                    <CustomInput type="text" placeholder={`0`} />

                    <CustomInput 
                    type="select" 
                    placeholder={`Month`}
                    options={months}
                    defaultValue="Month"
                     />
                </Row>


                <Row>
                    <label>Gives You</label>
                    <h2 className="returns">&#8358; {returns}</h2>

                    <button style={{width: "10em"}} type="submit" className="button filled_btn">Calculate</button>

                </Row>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 60%;
    border: 2px solid ${props => props.theme.secondaryColor};
    padding: 20px 10px;
    margin-top: 3em;
    border-radius: 6px;

    @media ${device.isSmallDevice} {
        width: 100%;
    }

    & > div {
        padding: 20px 50px;

        @media (max-width: 450px) {
            padding: 0px 20px;
        }

        @media (max-width: 350px) {
            padding: 0px 0px;
        }
    }

    label {
        font-size: 1em;
        color: #464646;
        text-align: left;
        font-weight: 400;
        align-self: center;

        @media ${device.mobileL} {
            font-size: 0.9em;
        }
    }

    #for {
        @media (max-width: 460px) {
            flex-wrap: wrap;
        }
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
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    h2 {
        color: white;
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;
        margin: 0;
    }

    p {
        color: #ddd;
        font-size: 12px;
        font-weight: lighter;
        margin: 0;
        width: 50%;
        text-align: left;

        @media ${device.mobileL} {
            width: 70%;
        }

        @media ${device.mobileS} {
            width: 95%;
        }
    }
`;

const Row = styled.span`
    display: flex;
    margin: 1.4em 0;
    gap: 30px;

    @media (max-width: 350px) {
        gap: 4px;
    }

    & > div {
        margin: 0;
        width: 100%;
        max-width: 100%;
    }

    button {
        margin: 0;
    }

    h2 {
        margin: 0;
        align-self: center;
    }
`