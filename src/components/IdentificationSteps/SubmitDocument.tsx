import { ArrowRightOutlined } from "@ant-design/icons";
import { FrameIcon } from "../../assets/svg";
import "./IdentificationSteps.css";

export default function SubmitDocument ({ setStep, setDocumentType }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>,
        setDocumentType: React.Dispatch<React.SetStateAction<string>>
    }) {
    
    return (
        <div className="id-page">
        <div>
            <div className="id-step">
                <h2>Submit Document</h2>
                <p style={{ padding: " 0 0.7em" }} className='capitalize'>
                    We need to verify your information <br />
                    Please submit the documents below to process your applications
                </p>
                <div className="choice">
                    <span><FrameIcon /></span>
                    <span onClick={() => {setDocumentType("nin"); setStep(2) }} className="text">National Identity Number (NIN) </span>
                    <ArrowRightOutlined className="arrow" />
                </div>
                <div className="choice">
                <span><FrameIcon /></span>
                    <span  onClick={() => {setDocumentType("passport"); setStep(2) }} className="text">Passport</span>
                    <ArrowRightOutlined className="arrow" />
                </div>
                <div className="choice">
                    <span><FrameIcon /></span>
                    <span onClick={() => {setDocumentType("license"); setStep(2) }}className="text">Driver's License</span>
                    <ArrowRightOutlined className="arrow" />
                </div>

                <p className="link">Why is this necessary?</p>
                
            </div>

        </div>

    </div>
    )
}