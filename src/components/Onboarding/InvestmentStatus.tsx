import { useNavigate } from "react-router-dom"

export default function InvestmentStatus() {
    const navigate = useNavigate();

    return (
        <div className="onboarding-page">
            <div style={{ height: "95%", overflowY: "auto" }}>
                <div className="onboarding-step">
                    <h3>What's your nationality?</h3>
                    <p style={{ fontSize: "0.8em" }}>You can choose more than one option</p>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="Gift">Gift</label>
                            <input
                                type="checkbox" name="source" value="Gift" id="Gift" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Savings">Savings</label>
                            <input
                                type="checkbox" name="source" value="Savings" id="Savings" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Gambling">Gambling</label>
                            <input
                                type="checkbox" name="source" value="Gambling" id="Gambling" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Employment">Employment</label>
                            <input
                                type="checkbox" name="source" value="Employment" id="Employment" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Rollover">Rollover</label>
                            <input
                                type="checkbox" name="source" value="Rollover" id="Rollover" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Sale of Business">Sale of Business</label>
                            <input
                                type="checkbox" name="source" value="Sale of Business" id="Sale of Business" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Insurance Proceedings">Insurance Proceedings</label>
                            <input
                                type="checkbox" name="source" value="Insurance Proceedings" id="Insurance Proceedings" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Inheritance / Trust">Inheritance / Trust</label>
                            <input
                                type="checkbox" name="source" value="Inheritance / Trust" id="Inheritance / Trust" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Investment Proceeds">Investment Proceeds</label>
                            <input
                                type="checkbox" name="source" value="Investment Proceeds" id="Investment Proceeds" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Retirement Funds">Retirement Funds</label>
                            <input
                                type="checkbox" name="source" value="Retirement Funds" id="Retirement Funds" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Legal Settlements">Legal Settlements</label>
                            <input
                                type="checkbox" name="source" value="Legal Settlements" id="Legal Settlements" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Spouse / Parents">Spouse / Parents</label>
                            <input
                                type="checkbox" name="source" value="Spouse / Parents" id="Spouse / Parents" />
                        </div>
                        

                    </div>


                    <h3>Investment objective?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="Not sure">Not sure</label>
                            <input
                                type="radio" name="objective" value="Not sure" id="Not sure" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Speculate" >Speculate</label>
                            <input
                                type="radio" name="objective" value="Speculate" id="Speculate" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Frequent" >Frequent</label>
                            <input
                                type="radio" name="objective" value="Frequent" id="Frequent0" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Occasionally" >Occasionally</label>
                            <input
                                type="radio" name="objective" value="Occasionally" id="Occasionally" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Long Term" >Long Term</label>
                            <input
                                type="radio" name="objective" value="Long Term" id="Long Term" />

                        </div>

                    </div>

                    <h3>Investment experience?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="None">None</label>
                            <input
                                type="radio" name="experience" value="None" id="None" />
                        </div>
                        <div className="badge">
                            <label htmlFor="Beginner" >Beginner</label>
                            <input
                                type="radio" name="experience" value="Beginner" id="Beginner" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Some Experience" >Some Experience</label>
                            <input
                                type="radio" name="experience" value="Some Experience" id="Some Experience" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Intermediate" >Intermediate</label>
                            <input
                                type="radio" name="experience" value="Intermediate" id="Intermediate" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Professional" >Professional</label>
                            <input
                                type="radio" name="experience" value="Professional" id="Professional" />

                        </div>

                    </div>



                    <button onClick={() => navigate("/app")} style={{ alignSelf: "baseline" }} className='btn filled_btn'>Continue</button>
                </div>
            </div>

        </div>
    )

} 