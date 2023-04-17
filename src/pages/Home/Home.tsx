import {
    Categories, StockAdvisor, Card, TopMovers,
    DataLink, StockOfTheMonth, Stocks, Calculator,
    News, PerformanceCard, TransactionCard,
}
    from "../../components";
import styled from "styled-components";
import "./Home.css";
import { device } from "../../constants";


export default function Home() {
    return (
        <div className="outlet">
            <div className="header-wrapper">
                <Card />
                <PerformanceCard />
                <TransactionCard />
            </div>
            <DataLink text="featured themes" link="themes" placeholder="see all themes" />
            <Categories />
            <StockAdvisor />
            <TopMovers />
            <StockOfTheMonth />
            <DataLink text="featured investments" link="/app" placeholder="see all investments" />
            <Stocks />
            <Footer>
                <News />
                <Calculator />
            </Footer>
            <div style={{ marginTop: "5em" }}></div>
        </div>

    )
};

const Footer = styled.section`
    display: flex; 
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 2em;

    @media ${device.isSmallDevice} {
        flex-direction: column;
    }
`