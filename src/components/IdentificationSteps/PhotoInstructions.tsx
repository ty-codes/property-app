import { IdentityIcon } from "../../assets/svg";
import "./IdentificationSteps.css";

export default function PhotoInstructions({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    return (
        <div className="id-page">
            <div>
                <div className="id-step">
                    <IdentityIcon style={{width: "90%"}} />
                    <h2>Take Photo - ID Front</h2>
                    <p style={{ padding: " 0 0.7em" }} className='capitalize'>
                        Place ID on a plain dark surface and make <br />
                        sure all four corners are visible
                    </p>
                    <button onClick={() => setStep(3)} style={{ alignSelf: "center" }} className='btn filled_btn'>Upload Image</button>
                    <p className="link">Why is this necessary?</p>

                </div>

            </div>

        </div>
    )
}