import { CloseIcon } from "../../assets/svg";
import "./ListStockDocuments.css";

export default function ListStockDocuments() {
    return (
        <div id="stock-documents">
            <h3>Documents</h3>
            <FundsInformation />
            <SponsorInformation />
            <ClosingDocuments />
        </div>
    )
};

const FundsInformation = (): JSX.Element => {
    const placeholder = ["fund fact sheet", "marketing deck", "frequently asked questions"]
    return (
        <div>
            <h4>Funds Information</h4>
            {placeholder?.map((text) => (
                <p className="doc">
                    {text}<CloseIcon />
                </p>
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
                <p className="doc">
                    {text}<CloseIcon />
                </p>
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
                <p className="doc">
                    {text}<CloseIcon />
                </p>
            ))}
        </div>
    )
}