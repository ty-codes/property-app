import { useState } from "react"

export default function MaritalStatus ({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    
    const [maritalStatus, setMaritalStatus] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");

    return (
        <div className="onboarding-page">
        <div>
            <div className="onboarding-step">
                <h2>Marital status</h2>
                <div className="bage-group">
                    <div className="badge" onClick={() => setMaritalStatus("married")}>Married</div>
                    <div className="badge" onClick={() => setMaritalStatus("single")}>Single</div>
                    <div className="badge" onClick={() => setMaritalStatus("widowed")}>Widowed</div>
                    <div className="badge" onClick={() => setMaritalStatus("divorced")}>Divorced</div>
                </div>

                <h2>Employment status</h2>
                <div className="badge-group">
                    <div className="badge" onClick={() => setEmploymentStatus("employed")}>Employed</div>
                    <div className="badge" onClick={() => setEmploymentStatus("unemployed")}>Unemployed</div>
                    <div className="badge" onClick={() => setEmploymentStatus("student")}>Student</div>
                    <div className="badge" onClick={() => setEmploymentStatus("retired")}>Retired</div>
                </div>
                
                <button onClick={() => setStep(2)} style={{ alignSelf: "baseline" }} className='btn filled_btn'>Continue</button>
            </div>
        </div>

    </div>
        )

}