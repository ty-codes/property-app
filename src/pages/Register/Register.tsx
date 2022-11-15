import React, { useState, useEffect, SetStateAction, Suspense } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import '../SignIn/SignIn.css';
import './Register.css';
import { Link } from 'react-router-dom';
import { Interface } from "readline";
import Modal from 'react-modal';
import success from '../../assets/success.svg';

// const customStyles = {
//     content: {
//         width: '29%',
//         height: '430px',
//         left: '77%',
//         right: 'auto',
//         bottom: 'auto',
//         marginTop: '25%',
//         transform: 'translate(-50%, -50%)',
//         padding: 0,
//         overflow: "hidden",
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
//     },
// };

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

export default function Register({ isVerified, setIsVerified, uid, setUid }:
    {
        isVerified: boolean,
        setIsVerified: React.Dispatch<React.SetStateAction<boolean>>
        uid: string,
        setUid: React.Dispatch<React.SetStateAction<string>>
    }): JSX.Element {
    const [access, setAccess] = useState<string>('email');
    const [isUser, setAuth] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [code, setCode] = useState<string[]>([]);
    const [show, setShow] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false)

    type Placeholder = {
        email: string,
        phoneNumber: string,
        accessType: string,
        isUser: boolean
    }
    let subtitle: any;
    const navigate = useNavigate();

    const userPlaceholder: Placeholder = {
        email: email,
        phoneNumber: phoneNumber,
        accessType: access,
        isUser: isUser
    }
    

    const emailAccess = (): JSX.Element => {
        return (
            <div className="input_wrap">
                <label htmlFor="email">Email Address</label><br />
                <input
                    name="email"
                    type="email"
                    maxLength={50}
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required /><br />
            </div>
        )
    }
    const phoneAccess = (): JSX.Element => {
        return (
            <div className="phone_wrap">
                <span>+234</span>
                <input
                    id="phone_number"
                    type="tel"
                    maxLength={11}
                    value={phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} required />
                <br />
            </div>
        )
    }

    const censorText = (text: string) => {
        if (text) {
            if (text === email) {
                var userName = "";
                var domainName = "";
                var split = text.split('@');

                for (var u = 0; u < split[0].length; u++) {
                    userName += "*";
                }
                for (var d = 0; d < split[0].length; d++) {
                    domainName += "*";
                }
                return userName + '@' + domainName;
            } else if (text === phoneNumber) {
                var result = "";
                for (var i = 0; i < 4; i++) result += "*"; return phoneNumber.slice(0, 7) + result;
            } else {
                return;
            }

        }
    }
    const validateId = (id: string) => {
        // post/send id back to backend to check its authenticity
        // is status code 200, 
        // show modal and navigate to verify page
        setShow(true);

    }
    const verifyCode = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // send code to backend
        // receive token/id stored in localstorage
        !localStorage.getItem('id') && localStorage.setItem('id', '12345');
        const id = localStorage.getItem('id')

        // check storage token validity

        if (id) {
            setUid(id);
            validateId(id)
        }
    }

    const verifyPhoneNumber = (number: string): JSX.Element => {
        return (
            <>
                <div className="verify">
                    <h2 className="capitalize primary_text">OTP verificaion</h2>
                    <p>Check your inbox. We've sent you the code
                        at {censorText(number)}
                    </p>
                    <form onSubmit={(e) => { verifyCode(e) }}>
                        <div className="code">
                            <input type='text' maxLength={1} className='dgt1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[0] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt2' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[1] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt3' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[2] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt4' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[3] = e.target.value; setCode(code) }} />

                        </div>
                        <p>Didn't receive any code?
                            <Link className="link" to='/'>  Request again</Link>
                        </p>
                        <button type="submit" className='btn filled_btn'>Verify</button>
                    </form>



                </div>

            </>
        )
    }


    const verifyEmail = (email: string): JSX.Element => {


        return (
            <>

                <div className="verify">
                    <h2 className="capitalize primary_text">Verify Email</h2>
                    <p>For security, please enter the code that
                        we've sent to {censorText(email)}
                    </p>
                    <form onSubmit={(e) => { verifyCode(e) }}>
                        <div className="code">

                            <input type='text' maxLength={1} className='dgt1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[0] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt2' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[1] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt3' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[2] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} className='dgt4' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[3] = e.target.value; setCode(code) }} />

                        </div>
                        <p>Didn't receive any code?</p>
                         <p><Link className="link" to='/'>  Request again</Link></p>   
                        
                        <button type="submit" className='btn filled_btn'>Verify</button>
                    </form>



                </div>
            </>
        )
    }

    return (
        <>
            {isVerified
                ? <Navigate to={`${uid}/verify`} />

                : (
                    <div id="register">
                        {isUser && email
                            ? (
                                verifyEmail(userPlaceholder.email)

                            )
                            : isUser && phoneNumber ? (
                                verifyPhoneNumber(userPlaceholder.phoneNumber)
                            )
                                : (
                                    <div className='wrapper' >
                                        <div className="mini_container register">
                                            <p className="heading capitalize">Sign up To Property</p>
                                            <p className="subtitle capitalize">let's get to know you</p>
                                            <span className="access_wrap">
                                                <span className="access">
                                                    <span
                                                        onClick={() => setAccess('email')}
                                                        id={access === 'email' ? 'active' : "inactive"}
                                                    >Email</span>
                                                    <span
                                                        onClick={() => setAccess('phone')}
                                                        id={access === 'email' ? 'inactive' : "active"}
                                                    >Phone Number</span>
                                                </span>
                                            </span>

                                            <>
                                                <form id={access === 'email' ? 'email' : 'phone'} onSubmit={(e) => { e.preventDefault(); setAuth(true) }} >
                                                    {(access === 'email')
                                                        ? emailAccess()
                                                        : phoneAccess()
                                                    }
                                                    <button id="register_btn" className="btn filled_btn" type="submit">Continue</button>

                                                    <div className="btn_group">
                                                        <button><span><img src={require("../../assets/google.png")} alt='google_icon' />Continue with Google</span></button>
                                                        <button><span><img src={require("../../assets/fb.png")} alt='fb_icon' />Continue with Facebook</span></button>


                                                    </div>
                                                    {/* <p className="register_link">Already have an account? <Link className='link' to="/signin" >Sign in</Link></p> */}

                                                </form>
                                                <p className="register_link">Already have an account? <Link className='link' to="/signin" >Sign in</Link></p>



                                            </>



                                        </div>

                                    </div>
                                )
                        }
                        
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
                                <p className="subtitle capitalize">Your data has been verified successfully</p>
                                {/* <h2>Success</h2> */}
                                {/* <p>Your data has been verified successfully</p> */}
                                <button className="btn filled_btn" onClick={() => { setIsVerified(true) }}>Continue</button>

                            </div>

                        </Modal>
                        

                    </div>
                )
            }



        </>

    )
}

