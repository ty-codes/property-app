import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { partyhatIcon } from "../assets";
import { LooperIcon, TicKIcon } from "../assets/svg";
import styled from "styled-components";
import { device } from "../constants";

export default function IdVerification(
    { setStep }:
        {
            setStep: React.Dispatch<React.SetStateAction<number>>
        }) {

    const navigate = useNavigate();
    return (
        <Wrapper>
            <div>
                <Step>
                    <img src={partyhatIcon} alt='congratulations_icon' />
                    <h2>Welcome To Property</h2>
                    <p style={{ padding: " 0 0.7em" }} className='capitalize'>Join the largest real estate tracking platform</p>
                    <Box className="box filled-box">
                        <span><UserOutlined /></span>
                        <span onClick={() => navigate("/register")} className="text">Create Your Account</span>
                        <LooperIcon className="looper" />
                    </Box>
                    <Box className="box outlined-box">
                        <span><TicKIcon /></span>
                        <span onClick={() => setStep(1)} className="text">Verify Your Identity</span>
                        <LooperIcon className="looper" />
                    </Box>
                    <button onClick={() => setStep(1)} style={{ alignSelf: "center" }} className='button filled_btn'>Verify Now</button>
                    <button onClick={() => navigate("stage2")} style={{ alignSelf: "center" }} className='button outlined_btn'>Skip For Now</button>

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

    .filled-box {
        background-color: #1363ff;
        color: #fff;
    }
    
    .outlined-box {
        border: 1px solid #1363ff;
        color: #1363ff;
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

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    border-radius: 4px;
    width: 25em;
    margin-bottom: 2em;

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

    & > span:first-child svg, & > span:first-child span {
        margin: auto;
    }

    .looper {
        width: 50px;
        height: auto;
    }

    @media (max-width: 340px){
        width: 22em;
    }
`;
