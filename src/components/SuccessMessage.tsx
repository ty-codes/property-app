import { useNavigate } from "react-router-dom";
import { partyhatIcon } from "../assets";
import styled from "styled-components";
import { device } from "../constants";

export default function SuccessMessage() {
    
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div>
                <Step>
                    <img src={partyhatIcon} alt='congratulations_icon' />
                    <h2>Welcome To Property</h2>
                    <p style={{ padding: " 0 0.7em" }} className='capitalize'>
                        Your account is finished and ready to explore
                    </p>
                    <button onClick={() => navigate("/verification/stage2")} style={{ alignSelf: "center" }} className='button filled_btn'>Let's Go</button>
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

