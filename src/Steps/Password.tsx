const Password = ({ password, setPassword }: { password: string, setPassword: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div id='name_step' className="step">
            <h2>Password</h2>
            <p>set your account password</p>
            <div className="form">
                <label htmlFor='password'>Password</label>
                <br /><input name='password' type='password' required />

                <br /><label htmlFor='confirm-password'>Re-enter your password</label>
                <br /><input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} name='confirm-password' type='password' required />

            </div>
        </div>
    )
};

export default Password;