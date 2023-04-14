import { CustomInput } from "..";

export default function EmploymentStatus({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    return (
        <div className="onboarding-page">
            <div style={{ height: "95%", overflowY: "auto" }}>
                <div className="onboarding-step">
                    <h3>Employer's name</h3>
                    <div className="input-wrapper"
                    >
                        <CustomInput
                            type="text"
                            placeholder="Employer"
                        />
                    </div>


                    <h3>Job title</h3>
                    <div className="input-wrapper"
                    >
                        <CustomInput
                            type="text"
                            placeholder="Job Title"
                        />
                    </div>

                    <h3>What is your annual income?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="less than #10, 000">less than #10, 000</label>
                            <input
                                type="radio" name="income" value="less than #10, 000" id="less than #10, 000" />
                        </div>
                        <div className="badge">
                            <label htmlFor="$10, 000 - $100, 000" >$10, 000 - $100, 000</label>
                            <input
                                type="radio" name="income" value="$10, 000 - $100, 000" id="$10, 000 - $100, 000" />

                        </div>
                        <div className="badge">
                            <label htmlFor="$10, 000 - $1,000, 000" >$10, 000 - $1,000, 000</label>
                            <input
                                type="radio" name="income" value="$10, 000 - $1,000, 000" id="$10, 000 - $1,000, 000" />

                        </div>
                        <div className="badge">
                            <label htmlFor="$1,000, 000 and above" >$1,000, 000 and above</label>
                            <input
                                type="radio" name="income" value="$1,000, 000 and above" id="$1,000, 000 and above" />

                        </div>

                    </div>


                    <h3>What is your investment time horizon?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="Short-Term" >Short-Term</label>
                            <input
                                type="radio" name="investment-time" value="Short-Term" id="Short-Term" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Medium-Term" >Medium-Term</label>
                            <input
                                type="radio" name="investment-time" value="Medium-Term" id="Medium-Term" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Long-Term" >Long-Term</label>
                            <input
                                type="radio" name="investment-time" value="Long-Term" id="Long-Term" />

                        </div>
                    </div>

                    <h3>What is your risk tolerance when it comes to investments?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="High Risk Tolerance" >High Risk Tolerance</label>
                            <input
                                type="radio" name="tolerance" value="High Risk Tolerance" id="High Risk Tolerance" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Low Risk Tolerance<" >Low Risk Tolerance</label>
                            <input
                                type="radio" name="tolerance" value="Low Risk Tolerance<" id="Low Risk Tolerance<" />

                        </div>
                    </div>

                    <h3>What type of investment are you interested in?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="Stocks" >Stocks</label>
                            <input
                                type="radio" name="investment-type" value="Stocks" id="Stocks" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Bonds" >Bonds</label>
                            <input
                                type="radio" name="investment-type" value="Bonds" id="Bonds" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Real-estate" >Real-estate</label>
                            <input
                                type="radio" name="investment-type" value="Real-estate" id="Real-estate" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Future" >Future</label>
                            <input
                                type="radio" name="investment-type" value="Future" id="Future" />

                        </div>
                    </div>

                    <button onClick={() => setStep(3)} style={{ alignSelf: "baseline" }} className='btn filled_btn'>Continue</button>
                </div>
            </div>

        </div>
    )

}