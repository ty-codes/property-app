import styled from "styled-components";
import { CloseIcon } from "../assets/svg";


export default function ListStockDocuments() {
    return (
        <Wrapper>
            <h3>Documents</h3>
            <FundsInformation />
            <SponsorInformation />
            <ClosingDocuments />
        </Wrapper>
    )
};

const FundsInformation = (): JSX.Element => {
    const placeholder = ["fund fact sheet", "marketing deck", "frequently asked questions"]
    return (
        <div>
            <h4>Funds Information</h4>
            {placeholder?.map((text) => (
                <Document>
                    {text}<CloseIcon />
                </Document>
            ))}
        </div>
    )
}

const SponsorInformation = (): JSX.Element => {
    const placeholder = ["Track record"]
    return (
        <div>
            <h4>Sponsor Information</h4>
            {placeholder?.map((text) => (
                <Document>
                    {text}<CloseIcon />
                </Document>
            ))}
        </div>
    )
}

const ClosingDocuments = (): JSX.Element => {
    const placeholder = ["limited liability company agreement", "subscription agreement", "investor verification letter"]
    return (
        <div>
            <h4>Closing Documents</h4>
            {placeholder?.map((text) => (
                <Document>
                    {text}<CloseIcon />
                </Document>
            ))}
        </div>
    )
};

const Wrapper = styled.div`
    margin: 2.5em 0;

    h4 {
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;
        text-align: left;
        text-transform: capitalize;
        color: #bbb;
    }

    div h6 {
        color: ${props => props.theme.primaryColor};
        font-size: 0.6em;
        background-color: ${props => props.theme.secondaryColor};
        text-align: left;
        padding: 15px 15px;
        width: 20em; 
    }

    .document svg {
        width: 10px;
        height: 10px;
        float: right;
    }

`;

const Document = styled.p`
    color: ${props => props.theme.primaryColor} !important;
    font-size: 0.7em;
    background-color: #c5d8ff;
    text-align: left;
    padding: 10px 20px;
    width: 15em; 
    position: relative;

    svg {
        width: 10px;
        height: 10px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`