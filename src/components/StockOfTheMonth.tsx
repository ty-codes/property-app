import { useNavigate } from "react-router-dom";
import { graph, fbn } from "../assets";
import styled from "styled-components";

export default function StockOfTheMonth ():JSX.Element {
    var mover =  {
        image: fbn,
        name: "CBRE",
        website: "dangote.com",
        price: "600"
    };
    const navigate = useNavigate();

    return (
        <Wrapper>
            <p>Stock of the month</p>
            <Stock onClick={() => navigate("property/1")}>
                <div className="company">
                    <span className="logo">
                        <img src={mover.image} alt="company-logo" />
                    </span>
                    <div>
                        <h4>{mover.name}</h4>
                        <p>&#8358; {mover.price}</p>
                    </div>
                </div>
                <img src={graph} alt="graph" />
            </Stock>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin: 2em 0;

    p {
        text-align: left;
        font-size: 0.9em;
        color: #263238;
        font-weight: 600;
    text-transform: capitalize;
    }

`;

const Stock = styled.div`
    h3 {
        font-weight: 500;
        font-size: 35px;
        line-height: 35px;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;

        color: #263238;

    }

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        /* identical to box height */

        text-align: center;
        text-transform: capitalize;

        color: #464646;
    }

    img {
        height: 250px;
        width: 100%;
    }

    .company {
        display: flex;
        gap: 4px;
    }

    .company img {
        width: 40px;
        height: 40px;
    }

    .company .logo {
        border: 0.8px solid #c5d8ff;
        border-radius: 6px;
        height: 60px;
        width: 60px;
        padding: 10px;
    }

    .company h4 {
        font-size: 15px;
        text-transform: capitalize;
        color: #272728;
        text-align: left;
    }

    .company p {
        font-size: 10px;
        color: #464646;
        text-align: left;
    }
`;