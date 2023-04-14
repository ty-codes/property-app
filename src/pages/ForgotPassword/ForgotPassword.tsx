import React, { useState } from "react";
import { Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";
import GetEmail from "../../Steps/GetEmail";
import VerifyEmail from "../../Steps/VerifyEmail";
import CreatePassword from "../../Steps/CreatePassword";
import Modal from 'react-modal';
import success from '../../assets/success.svg';
import './ForgotPassword.css';

const steps: string[] = ['Forgot password', 'Verify Email', 'Create Password'];
const customStyles = {
    content: {
        width: '29%',
        height: '430px',
        left: '77%',
        right: 'auto',
        bottom: 'auto',
        marginTop: '25%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
};



Modal.setAppElement('#root');

const ForgotPassword = ({ forgotPasswordEmail, setForgotPasswordEmail }: {
    forgotPasswordEmail: string
    setForgotPasswordEmail: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {

    const [activeStep, setActiveStep] = useState<number>(0);
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)
    const navigate = useNavigate();

    const SuccessModal = (): JSX.Element => {
        return (
            <Modal
                // isOpen={modalIsOpen}
                isOpen={show}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setShow(false)}
                shouldCloseOnOverlayClick={false}
                style={customStyles}
                className="myModal"
                contentLabel="Example Modal"
            >
                <div className="modal_content_wrap">
                    <img src={success} alt="success_icon" />
                    <h2 className="main_text" style={{ margin: '1.8em 0 0 0' }}>Success</h2>
                    <p className="subtitle capitalize">Your password has been set successfully</p>
                    <button className="btn filled_btn" onClick={() => { setShow(false); navigate('/signin') }}>Back To Login</button>

                </div>

            </Modal>
        )
    }

    return (
        <>
            {
                show ? (
                    <SuccessModal />
                )
                    : (
                        <div id="forgotpassword" className="wrap">
                            <Stepper activeStep={activeStep}>
                                {steps.map((step) => (
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>

                                    </Step>
                                ))}
                            </Stepper>

                            <>
                                {
                                    activeStep === 0
                                        ? <GetEmail
                                            forgotPasswordEmail={forgotPasswordEmail}
                                            setForgotPasswordEmail={setForgotPasswordEmail}
                                            activeStep={activeStep}
                                            setActiveStep={setActiveStep}
                                        />
                                        : activeStep === 1
                                            ? <VerifyEmail activeStep={activeStep}
                                                setActiveStep={setActiveStep} />
                                            : activeStep === 2
                                                ? <CreatePassword
                                                    password={password}
                                                    setPassword={setPassword}
                                                    activeStep={activeStep}
                                                    setActiveStep={setActiveStep}
                                                    setShow={setShow}
                                                />

                                                : <GetEmail
                                                    forgotPasswordEmail={forgotPasswordEmail}
                                                    setForgotPasswordEmail={setForgotPasswordEmail}
                                                    activeStep={activeStep}
                                                    setActiveStep={setActiveStep}
                                                />
                                }
                            </>
                        </div>
                    )
            }
        </>


    )
};
export default ForgotPassword;