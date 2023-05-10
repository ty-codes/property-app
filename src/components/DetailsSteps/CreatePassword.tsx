const CreatePassword = ({ password, setPassword, activeStep, setActiveStep, setShow }: {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div id="create_password" className="step">
            <h2 className="main_text">create password</h2>
            <p className="subtitle capitalize">recover your account back</p>
            <form onSubmit={() => { setActiveStep(activeStep + 1) }}>
                <label htmlFor='password'>Password</label>
                <br /><input name='password' type='password' required />

                <br /><label htmlFor='confirm-password'>Re-enter password</label>
                <br /><input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} name='confirm-password' type='password' required />

                <button type="submit" className="button filled_btn" onClick={() => { setShow(true) }}>Set Password</button>
            </form>
        </div>
    )
};

export default CreatePassword;