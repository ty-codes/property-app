import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { dangote, gtb, fbn, oando, googleIcon, graph } from "../assets";
import styled from "styled-components";
import { device } from "../constants";

export default function InsightsCard() {

	const keys = {
		"today": 0,
		"all-time": 1,
		"1-day": 2,
		"1-month": 3,
		"1-year": 4,
	};

	return (
		// <div>
		<TabWrapper
			className="tabs"
			defaultIndex={keys["today"] || 0}
			onSelect={(index) => console.log(index, "tabs wrap")}
		>
			<h3 style={{margin: "0"}}>Insights</h3>
			<TabList className="tab-list">

				<Tab className="tab">
					<div>
						<p>Today</p>
					</div>
				</Tab>

				<Tab className="tab">
					<div>
						<p>All Time</p>
					</div>
				</Tab>

				<Tab className="tab">
					<div>
						<p>1 Day</p>
					</div>
				</Tab>

				<Tab className="tab">
					<div>
						<p>1 Month</p>
					</div>
				</Tab>

				<Tab className="tab">
					<div>
						<p>1 Year</p>
					</div>
				</Tab>
			</TabList>


			<TabPanel className={`tab-panel`}>
				<Stocks />
			</TabPanel>

			<TabPanel className={`tab-panel`}>

				<Stocks2 />
			</TabPanel>

			<TabPanel className={`tab-panel`}>

				<Stocks />
			</TabPanel>

			<TabPanel className={`tab-panel`}>

				<Stocks2 />
			</TabPanel>

			<TabPanel className={`tab-panel`}>

				<Stocks />
			</TabPanel>
		</TabWrapper>
		// </div>
	)
};

const Stocks = (): JSX.Element => {
	const placeholder = [
        {
            image: googleIcon,
            name: "access corp",
            website: "dangote.com",
            price: "2700",
            company: "access holdings plc"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600",
            company: "first bank holding company"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600",
            company: "guaranty trust bank holding company"
        },
        {
            image: oando,
            name: "MTN",
            website: "firstbankofnigeria.com",
            price: "1200",
            company: "MTN Nigeria PLC(MTNN)"
        },
    ]
	return (
		<Wrapper>
			{placeholder.slice(0, 4)?.map((stock) => (
				<StockItem>
					<img className="logo" src={stock.image} alt="logo" />
					<Name>
						<p>{stock.name}</p>
					</Name>
					<Graph src={graph} alt="graph" />
					<Price>
						<p className="price">&#8358; {stock.price}</p>
						<p className="percent">7%</p>
					</Price>
				</StockItem>
			))}
		</Wrapper>
	)
}

const Stocks2 = (): JSX.Element => {
	const placeholder = [
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600",
            company: "first bank holding company"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600",
            company: "guaranty trust bank holding company"
        },
        {
            image: oando,
            name: "MTN",
            website: "firstbankofnigeria.com",
            price: "1200",
            company: "MTN Nigeria PLC(MTNN)"
        },
    ]
	return (
		<Wrapper>
			{placeholder.slice(0, 4)?.map((stock) => (
				<StockItem>
					<img className="logo" src={stock.image} alt="logo" />
					<Name>
						<p>{stock.name}</p>
					</Name>
					<Graph src={graph} alt="graph" />
					<Price>
						<p className="price">&#8358; {stock.price}</p>
						<p className="percent">7%</p>
					</Price>
				</StockItem>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	@media ${device.isSmallDevice} {
		overflow-x: auto;
	}
`

const StockItem = styled.div`
	display: flex;
	flex-direction: row;
	margin: 1em 0;
	justify-content: space-between;


	p {
		margin: 0;
	}

	.logo {
		width: 50px;
		height: 50px;
		padding: 10px;
		border-radius: 4px;
		border: 0.7px solid ${props => props.theme.secondaryColor};
	}
`;

const Name = styled.div`
	display: flex;
	justify-content: column;
	width: 150px;
	text-overflow: ellipsis;
`;

const Graph = styled.img`
	width: 100px;
	height: 50px;
`;

const Price = styled.div`
	display: flex;
	flex-direction: column;

	.price {
		color: #000;
		font-size: 1em;
	}

	.percent {
		font-size: 1em;
		color: green;
	}
`

const TabWrapper = styled(Tabs)`
	// width: 33%;
	flex-grow: 1;
	overflow-y: auto;
	height: 280px;
	margin: 1em;

	@media (min-width: 1100px) {
        width: 31%;
    }

	@media (max-width: 520px) {
		margin: 1em 0;
	 }

	.tab-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow-x: auto;
	}
	
	.tab {
		background-color: ${props => props.theme.primaryColor};
		color: white;
		font-size: 0.7em;
		border-radius: 5px;
		cursor: pointer;
		width: 12em;
		padding: 12px 0;
		margin-right: 0.8px;

		p {
			margin: 0
		}
	}
`