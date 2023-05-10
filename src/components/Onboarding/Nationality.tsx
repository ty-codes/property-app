import { countries } from "../../constants";
import { useState } from "react";
import "./Onboarding.css";


export default function Nationality ({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    const [location, setLocation] = useState("")
    return (
        <div className="onboarding-page">
        <div>
            <div className="onboarding-step">
                <h2>What's your nationality?</h2>
                <div>
                    <select
                    name="location"
                    id="location"
                    value={location}
                >
                    {countries.map((entry, index) => (
                        <option key={index} value={entry.name} label={entry.name} />
                    ))}
                </select>
                </div>
                
                <button onClick={() => setStep(1)} style={{ alignSelf: "baseline" }} className='button filled_btn'>Continue</button>
            </div>
        </div>

    </div>
        )
}