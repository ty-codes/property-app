import styled from "styled-components";
import { CustomInput } from "../";
import { device } from "../../constants";

export default function Checkout() {
    return (
        <Wrapper>
            <h2>Payment Details</h2>
            <Input>
                <h3>Account Holder Name</h3>
                <CustomInput
                    type="text"
                />
            </Input>

            <Input>
                <h3>Card Number</h3>
                <CustomInput
                    type="text"
                />
            </Input>

            <Row>
                <span>
                    <h3>Expiry Date</h3>
                    <CustomInput
                        type="text"
                        placeholder="mm/yy"
                    />
                </span>

                <span>
                    <h3>CVV</h3>
                    <CustomInput
                        type="text"
                    />
                </span>
            </Row>

            <hr />
            <Details>
                <li>
                    <p>Sub Total</p>
                    <p className="primaryColor">&#8358; 3,000,000.00</p>
                </li>

                <li>
                    <p>Taxes</p>
                    <p className="primaryColor">&#8358; 60,000.00</p>
                </li>

                <li>
                    <p>Platform Fees</p>
                    <p className="primaryColor">&#8358; 6,000.00</p>
                </li>

                <li className="total">
                    <p>Total Amount</p>
                    <p className="primaryColor">&#8358; 3,068,000.00</p>
                </li>
            </Details>

            <button className="button filled_btn">Make Payment</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: column;
    max-width: 500px;

    hr {
        width: 100%;
        border-top: 1px solid ${props => props.theme.fade};
        margin: 2rem 0;
    }

    h2 {
        color: #464646;
        font-weight: 800;
        font-size: 2em;
        margin-bottom: 2em;
        text-transform: capitalize;

        @media ${device.mobileM} {
            margin-bottom: 2rem;
            margin-top: 3rem;
            font-size: 1.7rem;
        }
    }

    button {
        width: 100%;
    }
`;

const Input = styled.span`
    width: 100%;
    margin-bottom: 1em;


    & > div {
        margin: 0;
        width: 100%;
        max-width: 100%;
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    span div {
        color: red;
        width: auto;
    }
`;

const Details = styled.ul`
display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.2em;
        
        p {
            margin: 0;
            text-transform: uppercase;
            font-weight: 700;
            color: ${props => props.theme.fade};
            text-align: left;
        }

        .primaryColor {
            color: ${props => props.theme.primaryColor};
        }
    }

    .total {
        margin-top: 2em;  
    }
`;
