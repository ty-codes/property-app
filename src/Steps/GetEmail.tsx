const GetEmail = ({ forgotPasswordEmail, activeStep, setForgotPasswordEmail, setActiveStep }:
    {
        forgotPasswordEmail: string
        activeStep: number
        setForgotPasswordEmail: React.Dispatch<React.SetStateAction<string>>
        setActiveStep: React.Dispatch<React.SetStateAction<number>>
    }) => {
    return (
        <div className="get_email">
            <h2 className="main_text">Forgot password? </h2>
            <p className="subtitle capitalize">recover your account back</p>
            <form onSubmit={() => { setActiveStep(activeStep + 1) }}>
                <label htmlFor='email'>Email Address</label>
                <br />
                <input value={forgotPasswordEmail}
                    onChange={e => setForgotPasswordEmail(e.target.value)}
                    name='email' placeholder='Enter Email Address' type='email' required
                />
                <button type="submit" className="btn filled_btn">Continue</button>
            </form>
        </div>
    )
};

export default GetEmail;