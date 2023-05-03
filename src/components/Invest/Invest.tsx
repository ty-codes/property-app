import { CustomInput } from "..";
import styled from "styled-components";
import { fbn } from "../../assets";
import { HomeFilled } from "@ant-design/icons";
import { useState } from "react";


export default function Invest() {
    const stock = {
        image: fbn,
        name: "CBRE",
        price: 600
    }

    const [amount, setAmount] = useState(0);
    const [units, setUnits] = useState<number | undefined>();

    return (
        <div
            style={{
                display: "flex",
                margin: "auto",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <>
                <Header>
                    <Company>
                        <span className="logo">
                            <img src={stock?.image} alt="company-logo" />
                        </span>
                        <div>
                            <span className="location">
                                <h1>{stock?.name}</h1>

                                <Location><HomeFilled />Lekki Phase 1, Lagos, nigeria</Location>
                            </span>
                            <Name>Landmark Land Properties</Name>
                            <Price>
                                <h5>{Number(stock.price).toFixed(0)} <span>Per unit</span></h5>
                            </Price>
                        </div>
                    </Company>
                </Header>
            </>


            <Wrapper>
                <h3>How many units (shares) will you like to buy?</h3>
                <span className="input">
                    <CustomInput
                        type="text"
                        value={units}
                        onChange={(e: any) => {setUnits(Number(e.target.value))}}
                    />
                </span>

                <Amount>
                    <h1>&#8358;{units && (units * stock?.price).toLocaleString()}</h1>
                    <p>Estimated Cost (&#8358;)</p>
                </Amount>
                <Buttons>
                    <button className="button filled_btn">Outright purchase</button>
                    <button className="button outlined_btn">Part Payment</button>
                </Buttons>

                <button className="button filled_btn">Proceed to Checkout</button><br />
                <button className="button outlined_btn">Add to cart</button>
            </Wrapper>
        </div>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 30px 80px;
    margin-top: 2em;

    @media (max-width: 520px) {
        padding: 30px 0;
        border: none;
    }

    button {
        margin: 0;
    }

    .input div {
        margin: 0;
        width: 100%;
    }
`;

const Name = styled.h1`
    text-transform: capitalize;
    color: #272728;
    font-weight: 700;
`;

const Amount = styled.span`
    padding: 3em 0;
    text-align: center;

    h1 {
        font-weight: 900;
        color: #17df4d;
        font-size: 40px;
    }

    p {
        color: #979797;
    }
`;

const Location = styled.p`
    text-align: left;
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
    font-size: 13px;
    display: flex;
    margin: 0;
    gap: 5px;
    align-items: baseline;
`;

const Header = styled.div`
    display: flex;
    gap: 20px;

    h1 {
        @media (max-width: 520px) {
            font-size: 20px;
        }
    }

    h5 {
        @media (max-width: 520px) {
            font-size: 16px;
        }
    }

    p {
        @media (max-width: 520px) {
            font-size: 12px;
        }
    }

    @media (max-width: 520px) {
        margin-top: 2em;
    }
`
const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #17df4d;

    h5 {
        font-weight: 600;
        font-size: 12px;

        span {
        color: #979797;
        }
    }

    

`

const Company = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
    }

    .logo {
        border: 0.8px solid #c5d8ff;
        border-radius: 6px;
        height: 49px;
        padding: 4px;
    }

    h5 {
        margin: 1em;
        font-size: 16px;
    }

    h1, h5, h4 {
        margin: 0;
    }

    .location {
        display: flex;
        align-items: center;
        gap: 30px;

        h1 {
            font-weight: 700;
        }
    }

`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 1em;

    button {
        width: 49%;
        text-transform: capitalize;
        font-size: 12px;
    }
`;