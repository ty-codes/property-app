import styled from "styled-components";
import { FastArrowDown } from "../assets/svg";


export interface IStock {
    image?: string,
    name?: string,
    website?: string,
    price?: string
}

export default function Stock({ stock, id }: { stock: IStock, id: number }) {
    return (
        <Wrapper key={`top-stocks-${id}`}>
            <Margin>
                <span className="arrow"><FastArrowDown /></span>
                <p className="percentage">88.60%</p>
            </Margin>
            <Company>
                <span className="logo">
                    <img src={stock?.image} alt="company-logo" />
                </span>
                <div>
                    <h4>{stock?.name}</h4>
                    <p>{stock?.website}</p>
                </div>
            </Company>

            <h5>{Number(stock.price).toFixed(2)}</h5>

        </Wrapper>
    )
};

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
    gap: 4px;

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



`;

const Margin = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
    margin: 1em;
    gap: 5px;

    .arrow {
        background-color: #17df4d;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: flex;
        justify-content: center;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    .percentage {
        font-size: 17px;
        color: #17df4d;
        font-weight: 600;
        margin: 0;
    }
`;