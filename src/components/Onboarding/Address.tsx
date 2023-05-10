import { CustomInput } from "..";

export default function Address({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    return (
        <div className="onboarding-page">
            <div>
                <div className="onboarding-step">
                    <h2>Permanent address?</h2>
                    <div className="input-wrapper">
                        <CustomInput
                            name="address"
                            type="text"
                            placeholder="Address"
                        />
                    </div>

                    <button onClick={() => setStep(4)} style={{ alignSelf: "baseline" }} className='button filled_btn'>Continue</button>
                </div>
            </div>

        </div>
    )

}