import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { partyhatIcon } from "../../assets";
import { LooperIcon, TicKIcon } from "../../assets/svg";
import "./IdentificationSteps.css";

export default function SuccessMessage() {
    
    const navigate = useNavigate();
    return (
        <div className="id-page">
            <div>
                <div className="id-step">
                    <img src={partyhatIcon} alt='congratulations_icon' />
                    <h2>Welcome To Property</h2>
                    <p style={{ padding: " 0 0.7em" }} className='capitalize'>
                        Your account is finished and ready to explore
                    </p>
                    <button onClick={() => navigate("/verification/stage2")} style={{ alignSelf: "center" }} className='btn filled_btn'>Let's Go</button>
                </div>

            </div>

        </div>
    )
}