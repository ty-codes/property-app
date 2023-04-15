import { briefcase } from "../assets";
import { AdvisorLogo } from "../assets/svg";
import styled from "styled-components";
import { device } from "../constants";


interface IWrapper {
    bg?: string
} 

export default function StockAdvisor() {
    return (
        <Wrapper bg={briefcase}>
            <div className="main">
                <span>
                    <AdvisorLogo />
                    <p>Stock Advisor</p>
                </span>
                <h1>get a stock advisor for free</h1>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div<IWrapper>`
    display: flex;
    height: 270px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 10px;
    width: 100%;
    justify-content: space-between;
    margin-top: 3em;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    padding: 10px 0;

    h1 {
        font-size: 60px;
        font-weight: 900;
        text-transform: capitalize;
        color: white;

        @media ${device.isSmallDevice} {
            font-size: 40px;
            width: 60%;
        }
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: auto 1em;
        text-align: left;
    }

    .main span {
        display: flex;
        gap: 20px;
        font-weight: 600;
        color: white;
    }
`;

