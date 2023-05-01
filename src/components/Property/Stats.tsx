import { MessageOutlined } from "@ant-design/icons";
import styled from "styled-components";


export default function Stats() {
    const placeholder = [
        {
            metric: "open",
            price: 600
        },
        {
            metric: "volume",
            price: 600
        },
        {
            metric: "high",
            price: 600
        },
        {
            metric: "avg volume",
            price: 600
        },
        {
            metric: "low",
            price: 600
        },
        {
            metric: "mkt cap",
            price: 600
        },
        {
            metric: "52 wk high",
            price: 600
        },
        {
            metric: "avg ratio",
            price: 600
        },
        {
            metric: "52 wk low",
            price: 600
        },
        {
            metric: "Div/yield",
            price: 600
        },

    ]
    return (
        <>
            <h3>Stats <span><MessageOutlined /></span></h3>
            <Status>
                {placeholder?.map(stat => (
                    <li>
                        <p className="primaryColor">{stat?.metric}</p>
                        <p >&#8358;{stat?.price}</p>
                    </li>
                ))}
            </Status>
        </>
    )
};

const Status = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        width: 48%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.2em;
        
        p {
            margin: 0;
            text-transform: uppercase;
            font-weight: 600;
            color: ${props => props.theme.fade}
        }

        .primaryColor {
            color: ${props => props.theme.primaryColor};
        }
    }
`