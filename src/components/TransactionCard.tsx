import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { dangote, gtb, fbn, oando, googleIcon, graph } from "../assets";
import styled from "styled-components";
import { device } from "../constants";

export default function TransactionCard() {

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
			<span>
				<h3 style={{margin: "0"}}>Transactions</h3>
				<a href="/">See All</a>
			</span>
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
						<h6>{stock.website}</h6>

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
						<h6>{stock.website}</h6>
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
		width: 40px;
		height: 40px;
		padding: 5px;
		border-radius: 4px;
		border: 0.7px solid ${props => props.theme.secondaryColor};
	}
`;

const Name = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	align-items: start;
	font-size: 13px;
	font-weight: 500;
	text-overflow: ellipsis;
	margin: 0 0.5em;
`;

const Graph = styled.img`
	width: 80px;
	height: 40px;
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
	padding: 1em;
	border: 0.7px solid ${props => props.theme.secondaryColor};
	border-radius: 5px;
	transition: all .2s ease-in-out;
	margin: 0.5em 0.5em 0.5em 0;
	
	span {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1em;

		a {
			text-decoration: none;
			font-weight: 500;
			font-size: 12px;
			line-height: 15px;
			text-align: center;
			text-transform: capitalize;
			color: #979797;
			cursor: pointer;
		}

		h3 {
			font-weight: 400;
			font-size: 14px;
		}
	}

	&:hover {
		border: 3px solid ${props => props.theme.primaryColor};
	}

	@media (min-width: 1100px) {
        width: 25%;
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
		background-color: ${props => props.theme.secondaryColor}

	}
	
	.tab {
		background-color: transparent;
		color: black;
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