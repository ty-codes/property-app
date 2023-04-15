import { dangote, gtb, fbn, oando } from "../assets";
import { FastArrowDown } from "../assets/svg";
import styled from "styled-components";

export default function TopMovers() {
    const movers = [
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: dangote,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600"
        },
        {
            image: oando,
            name: "oando",
            website: "oandoplc.com",
            price: "600"
        },
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },
        // {
        //     image: gtb,
        //     name: "GTCO",
        //     website: "gtbank.com",
        //     price: "600"
        // },
        // {
        //     image: oando,
        //     name: "oando",
        //     website: "oandoplc.com",
        //     price: "600"
        // },
    ]
    return (
        <Wrapper>
            <Header>Top Movers</Header>
            <Movers>
                {movers.map((mover, key) => (
                    <Mover key={`top-movers-${key}`}>
                        <div className="margin">
                            <span className="arrow"><FastArrowDown /></span>
                            <p className="percentage">88.60%</p>
                        </div>
                        <Company>
                            <span className="logo">
                                <img src={mover.image} alt="company-logo" />
                            </span>
                            <div>
                                <h4>{mover.name}</h4>
                                <p>{mover.website}</p>
                            </div>
                        </Company>

                        <h5>&#8358; {Number(mover.price).toFixed(2)}</h5>

                    </Mover>
                ))}
            </Movers>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 3em;

`;

const Header = styled.div`
text-align: left;
    font-size: 0.9em;
    color: #263238;
    font-weight: 600;
`;

const Movers = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 0.8em;
`

const Mover = styled.div`
    padding: 20px;
    border: 0.8px solid #c5d8ff;
    border-radius: 8px;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    img {
        width: 40px;
        height: 40px;
    }

    .logo {
        border: 0.8px solid #c5d8ff;
        border-radius: 6px;
        height: 60px;
        width: 60px;
        padding: 10px;
    }

    h4 {
        font-size: 17px;
        text-transform: capitalize;
        color: #272728;
        text-align: left;
    }

    p {
        font-size: 10px;
        color: #464646;
        text-transform: lowercase;
        text-align: left;
        text-overflow: ellipsis;
    }

    h5 {
        margin: 1em;
        font-size: 16px;
    }

    .percentage {
        font-size: 17px;
        color: #17df4d;
        font-weight: 600;
        margin: 0;
    
    }
    
    .margin {
        text-align: center;
        align-self: center;
        display: flex;
        justify-content: center;
        margin: 1em;
        gap: 5px;
    }

    .arrow {
        background-color: #17df4d;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
    }
    
    .arrow svg {
        width: 17px;
        height: 17px;
    }

`

const Company = styled.div`
    display: flex;
    gap: 4px;
`