export default function FinancialStatus({ setStep }:
    {
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) {
    return (
        <div className="onboarding-page">
            <div style={{ height: "95%", overflowY: "auto" }}>
                <div className="onboarding-step">
                    <h3>Have you made any previous investments?</h3>
                    <label>If so, please provide a brief description</label>
                    <textarea></textarea>

                    <h3>Are you currently working with any financial advisor or broker?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="no" >No</label>
                            <input
                                type="radio" name="broker" value="no" id="no" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Yes" >Yes</label>
                            <input
                                type="radio" name="broker" value="Yes" id="Yes" />

                        </div>
                    </div>

                    <h3>How much capital do you have available for investment?</h3>
                    <label>If so, please provide a brief description</label>
                    <textarea></textarea>



                    <h3>Are you a US citizen or US resident for tax purposes?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="no" >No</label>
                            <input
                                type="radio" name="usCitizen" value="no" id="no" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Yes" >Yes</label>
                            <input
                                type="radio" name="usCitizen" value="Yes" id="Yes" />

                        </div>
                    </div>

                    <h3>Are you familiar with the risks involved in stock trading?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="no" >No</label>
                            <input
                                type="radio" name="risks" value="no" id="no" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Yes" >Yes</label>
                            <input
                                type="radio" name="risks" value="Yes" id="Yes" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Maybe" >Maybe</label>
                            <input
                                type="radio" name="risks" value="Maybe" id="Maybe" />

                        </div>
                    </div>

                    <h3>Are you willing to provide a copy of your id for identification purposes?</h3>
                    <div className="badge-group">
                        <div className="badge">
                            <label htmlFor="no" >No</label>
                            <input
                                type="radio" name="identification" value="no" id="no" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Yes" >Yes</label>
                            <input
                                type="radio" name="identification" value="Yes" id="Yes" />

                        </div>
                        <div className="badge">
                            <label htmlFor="Maybe" >Maybe</label>
                            <input
                                type="radio" name="identification" value="Maybe" id="Maybe" />

                        </div>
                    </div>


                    <button onClick={() => setStep(5)} style={{ alignSelf: "baseline" }} className='btn filled_btn'>Continue</button>
                </div>
            </div>

        </div>
    )

}