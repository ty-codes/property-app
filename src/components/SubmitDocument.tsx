import { ArrowRightOutlined } from "@ant-design/icons";
import { FrameIcon } from "../assets/svg";
import styled from "styled-components";
import { device } from "../constants";


export default function SubmitDocument ({ setStep, setDocumentType }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>,
        setDocumentType: React.Dispatch<React.SetStateAction<string>>
    }) {
    
    return (
        <Wrapper>
        <div>
            <Step>
                <h2>Submit Document</h2>
                <p style={{ padding: " 0 0.7em" }} className='capitalize'>
                    We need to verify your information <br />
                    Please submit the documents below to process your applications
                </p>
                <Choice>
                    <span><FrameIcon /></span>
                    <span onClick={() => {setDocumentType("nin"); setStep(2) }} className="text">National Identity Number (NIN) </span>
                    <ArrowRightOutlined className="arrow" />
                </Choice>
                <Choice>
                <span><FrameIcon /></span>
                    <span  onClick={() => {setDocumentType("passport"); setStep(2) }} className="text">Passport</span>
                    <ArrowRightOutlined className="arrow" />
                </Choice>
                <Choice>
                    <span><FrameIcon /></span>
                    <span onClick={() => {setDocumentType("license"); setStep(2) }}className="text">Driver's License</span>
                    <ArrowRightOutlined className="arrow" />
                </Choice>

                <p className="link">Why is this necessary?</p>
                
            </Step>

        </div>

    </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: #f9f9f9;
    height: 100%;
    width: 100vw;
    flex-direction: column;
    display: flex;
    justify-content: center;

    & > div{
        background-color: #fff;
        width: 55%;
        margin: auto;
        padding: 30px;

        @media ${device.isSmallDevice} {
            width: 90%;
        }
        
        @media (max-width: 450px) {
            width: 100%;
            height: 100vh;
        }
    }

    .link {
        font-size: 0.8em;
        color:#1363ff;
        margin-top: 4em;
    }
`;

const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #1363ff;
        font-weight: 800;
        font-size: 1.5em;
        margin-top: 1em;
        text-align: center;

        @media (max-width: 400px) {
            font-size: 1.3em;            
        }
    }

    p {
        font-size: 0.9em;
        margin-top: 1em;

        @media (max-width: 400px) {
            font-size: 0.8em;            
        }
    }
`;

const Choice = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    font-size: 0.8em;
    border-radius: 4px;
    width: 25em;
    margin-bottom: 2em;
    box-shadow: 0px 11.3128px 37.7095px rgba(218, 218, 218, 0.3);
    border-radius: 6px;
    padding: 10px;

    .text {
        align-self: center;
    }

    & > span:first-child {
        width: 40px;
        height: 40px;
        background-color: rgba(197, 216, 255, 0.59);
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        margin: auto 0 auto 10px;
    }
    
    & > span:first-child svg {
        margin: auto;
    }

    .arrow {
        margin: auto 0;
        color: #1363ff;
    }

    @media (max-width: 340px){
        width: 22em;
    }
`;
