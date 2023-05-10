import { CustomInput } from "..";
import styled from "styled-components";
import { fbn } from "../../assets";
import { HomeFilled } from "@ant-design/icons";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { device } from "../../constants";


export default function PaymentInformation(
    { setStep }:
        { setStep: React.Dispatch<React.SetStateAction<number>> }
) {
    const [units, setUnits] = useState<number | undefined>();

    const stock = {
        image: fbn,
        name: "CBRE",
        price: 600
    }

    const keys = {
        "outright-purchase": 0,
        "part-payment": 1,
    };

    const setActiveTab = (id: string) => {
        const tabs = Array.from(document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>);
        tabs.forEach(el => {
            el.style.backgroundColor = "transparent";
            el.style.color = "#000";
        })
        var activeTab = document.getElementById(`tab:r9:${id}`) as HTMLElement;
        activeTab.style.backgroundColor = "#1363ff";
        activeTab.style.color = "#fff";
    }

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
                                <h6>{Number(stock.price).toFixed(0)} <span>Per unit</span></h6>
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
                        onChange={(e: any) => { setUnits(Number(e.target.value)) }}
                    />
                </span>

                <Amount>
                    <h1>&#8358;{units && (units * stock?.price).toLocaleString()}</h1>
                    <p>Estimated Cost (&#8358;)</p>
                </Amount>

                <TabWrapper
                    className="tabs"
                    defaultIndex={keys["outright-purchase"] || 0}
                    onSelect={() => { return; }}
                >
                    <TabList className="tab-list">

                        <Tab className="tab"
                            style={{ backgroundColor: "var(--primaryColor", color: "white" }}
                            onClick={() => setActiveTab("0")}>
                            <div>
                                <p>Outright Purchase</p>
                            </div>
                        </Tab>

                        <Tab className="tab" onClick={() => setActiveTab("1")}>
                            <div>
                                <p>Part Payment</p>
                            </div>
                        </Tab>

                    </TabList>



                    <TabPanel className={`tab-panel`}>

                    </TabPanel>

                    <TabPanel className={`tab-panel`}>
                        <PartPayment>
                            <div>
                                <h3>How much are you paying right now?</h3>
                                <span className="input">
                                    <CustomInput
                                        type="text"
                                        lefticon={<>&#8358;</>}
                                    />
                                </span>
                            </div>

                            <div>
                                <h3>When will you complete the balance?</h3>
                                <span className="input">
                                    <CustomInput
                                        type="select"
                                        defaultValue="Duration"
                                        options={["2 weeks", "1 month", "3 months"]}
                                    />
                                </span>
                            </div>
                        </PartPayment>

                    </TabPanel>
                </TabWrapper>


                <button className="button filled_btn" onClick={() => setStep(2)}>Proceed to Checkout</button><br />
                <button className="button outlined_btn">Add to cart</button>
            </Wrapper>
        </div>
    )
};

const PartPayment = styled.div`
    margin-bottom: 1em;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px 80px;
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
        max-width: 100%;
    }

    h3 {
        font-size: 14px;
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
            font-size: 18px;
        }
    }

    h5 {
        @media (max-width: 520px) {
            font-size: 16px;
        }
    }

    p {
        @media (max-width: 520px) {
            font-size: 11px;
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

    h6 {
        font-weight: 600;

        span {
            color: #979797;
        }
    }
`;

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

        @media ${device.mobileM} {
            flex-direction: column;
            margin: 0;
            gap: 0;
            align-items: start;
        }
    }

`;

const TabWrapper = styled(Tabs)`
	flex-grow: 1;
	border-radius: 15px;
	transition: all .2s ease-in-out;
	margin: 0.5em 0.5em 0.5em 0;
    width: 100%;

	.tab-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
        width: 100%;
        margin-bottom: 1em;
		overflow-x: auto;
        border-radius: 5px;
		background-color: ${props => props.theme.secondaryColor}
	}
	
	.tab {
		background-color: transparent;
		color: black;
		font-size: 0.7em;
		cursor: pointer;
		padding: 12px 0;
		margin-right: 0.8px;
		border-radius: 5px;
        width: 50%;
        outline: none;

		p {
			margin: 0;
            font-size: 12px;
		}
	}
`;