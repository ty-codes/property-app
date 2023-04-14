import React from "react";
import { CustomInput } from "../../components";

const Password = ({ password, setPassword, activeStep, setActiveStep }: {
    password: string, setPassword: React.Dispatch<React.SetStateAction<string>>, activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <div className="level">
            <h2>Password</h2>
            <p>set your account password</p>
            <div className="form">
                <label htmlFor='password'>Password</label>
                <CustomInput
                    type="password"
                    name='password'
                    required
                />
                <label htmlFor='confirm-password'>Re-enter your password</label>
                <br />
                <CustomInput
                    value={password}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type="password"
                    name='confirm-password'
                    required
                />
            </div>
        </div>
    )
};

export default Password;