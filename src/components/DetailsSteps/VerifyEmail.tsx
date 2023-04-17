import React from 'react';
import mail from '../assets/mail.png';
import './Steps.css';

const VerifyEmail = ({ activeStep, setActiveStep }: {
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <div className='verify_email'>
            <div>
                <h2 className="main_text">verify email </h2>
                <img src={mail} alt="mail" />
                <h2 className="main_text">check your mail </h2>
                <p className="subtitle">Your account recovery link has been sent successfully</p>

            </div>
            <button className="btn filled_btn" onClick={() => setActiveStep(activeStep + 1)}>Verify Email</button>

        </div>
    )
};

export default VerifyEmail;