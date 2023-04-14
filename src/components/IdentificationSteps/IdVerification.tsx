import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { partyhatIcon } from "../../assets";
import { LooperIcon, TicKIcon } from "../../assets/svg";
import "./IdentificationSteps.css";

export default function IdVerification(
    { setStep }:
        {
            setStep: React.Dispatch<React.SetStateAction<number>>
        }) {
    
    const navigate = useNavigate();
    return (
        <div className="id-page">
            <div>
                <div className="id-step">
                    <img src={partyhatIcon} alt='congratulations_icon' />
                    <h2>Welcome To Property</h2>
                    <p style={{ padding: " 0 0.7em" }} className='capitalize'>Join the largest real estate tracking platform</p>
                    <div className="box filled-box">
                        <span><UserOutlined /></span>
                        <span  onClick={() => navigate("/register")} className="text">Create Your Account</span>
                        <LooperIcon className="looper" />
                    </div>
                    <div className="box outlined-box">
                    <span><TicKIcon /></span>
                        <span  onClick={() => setStep(1)} className="text">Verify Your Identity</span>
                        <LooperIcon className="looper" />
                    </div>
                    <button onClick={() => setStep(1)} style={{ alignSelf: "center" }} className='btn filled_btn'>Verify Now</button>
                    <button onClick={() => navigate("stage2")} style={{ alignSelf: "center" }} className='btn outlined_btn'>Skip For Now</button>

                </div>

            </div>

        </div>
    )
}