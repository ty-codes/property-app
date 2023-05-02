import styled from "styled-components";
import { FastArrowDown } from "../../assets/svg";
import { fbn } from "../../assets";




export default function PropertyDescription() {
    const stock = {
        image: fbn,
        name: "cbre",
        price: "600"
    }
    return (
        <>
            <Header>
                <Company>
                    <span className="logo">
                        <img src={stock?.image} alt="company-logo" />
                    </span>
                    <div>
                        <h4>{stock?.name}</h4>
                        <Margin>
                            <span className="arrow"><FastArrowDown /></span>
                            <p className="percentage">78.98%</p>
                        </Margin>
                    </div>
                </Company>


                <Price>
                    <h5>{Number(stock.price).toFixed(2)}</h5>
                    <p><div></div>Market open</p>
                </Price>
            </Header>

            <Name>Landmark Land Properties</Name>
            <Location>Lekki Phase 1, Lagos, nigeria</Location>
            <Description>
                CBRE is the world's largest commercial real estate
                services and investment company with the #1 global
                market position in leasing, property sales, outsourcing, 
                property management, and valluation. CBRE is also the largest 
                commercial property developer in the united states, and has $129B 
                of assets under management within our global investor's business. Our 
                more than 100,000 employees serve clients in over 100 countries, including over 
                90% of the Fortune 100.

            </Description>
        </>

    )
}

const Name = styled.h1`
    text-transform: capitalize;
    color: #272728;
    font-weight: 700;
`;

const Location = styled.p`
    text-align: left;
    color: ${props  => props.theme.primaryColor};
    font-weight: 700;
    font-size: 12px;

`;

const Description = styled.p`
    text-align: justify;
    font-weight: lighter;
    font-size: 14px;
    width: 100%;
    word-spacing: 5px;
    color: ${props => props.theme.fade};
    line-height: 1.7rem;
`;

const Header = styled.div`
    display: flex;
    gap: 20px;
`
const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h5 {
        font-weight: 600;
        font-size: 12px;
    }

    p {
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 3px;
    }

    div {
        width: 8px;
        height: 8px;
        background-color: #17df4d;
        border-radius: 50%;
    }


`
const Wrapper = styled.div`
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
    align-items: center;
`;

const Company = styled.div`
    display: flex;
    gap: 15px;

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

    h4 {
        font-size: 17px;
        text-transform: uppercase;
        color: #272728;
        font-weight: 700;
        text-align: left;
    }

    h5 {
        margin: 1em;
        font-size: 16px;
    }



`;

const Margin = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
    gap: 5px;

    .arrow {
        background-color: #17df4d;
        width: 17px;
        height: 17px;
        border-radius: 6px;
        display: flex;
        justify-content: center;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    .percentage {
        font-size: 12px;
        color: #17df4d;
        font-weight: 600;
        margin: 0;
    }
`;