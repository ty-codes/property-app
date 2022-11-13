import React, { useState } from "react";
import './SignIn.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
  
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


export default function SignIn({ uid, setUid }: { uid: string, setUid: React.Dispatch<React.SetStateAction<string>> }): JSX.Element {
    const [access, setAccess] = useState('email');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isUser, setIsUser] = useState(false);

    const navigate = useNavigate();

    const emailAccess = (): JSX.Element => {
        return (
            <div className="input_wrap label_wrap">
                <label htmlFor="email">Email Address</label><br />
                <input
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
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
                    value={phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                    type="tel"
                    maxLength={11}
                    required />
                <br />
            </div>
        )
    }
    const authenticateUser = (): void => {
        // backend auth here w/ password or verification code
        // receive token/id stored in localstorage
        !localStorage.getItem('id') && localStorage.setItem('id', '12345');

        const id = localStorage.getItem('id')

        // check storage token validity


        if (email === "tito123@gmail.com") {
            if (id) {
                setUid(id);
            }
        }
    }

    return (

        <div id="signin">
            <div className='wrapper' >
                <div className="mini_container signin">
                    <p className="heading">Sign in To Property</p>
                    <p className="subtitle capitalize">Hey there, welcome back</p>
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
                        <form id={access === 'email' ? 'email' : 'phone'} onSubmit={(e) => { e.preventDefault(); authenticateUser() }} >
                            {(access === 'email')
                                ? emailAccess()
                                : phoneAccess()
                            }
                            <button id="signin_btn" className="btn filled_btn"
                                type="submit"

                            >Sign in</button>

                            <div className="btn_group">
                                <button><span><img src={google} alt='google_icon' />Continue with Google</span></button>
                                <button><span><img src={fb} alt='fb_icon' />Continue with Facebook</span></button>


                            </div>
                            <Link to='/resetpassword' className="link capitalize">forgot password?</Link>
                        </form>
                        <p className="register_link">Haven't signed up yet? <Link className='link' to="/register" >Create an account</Link></p>


                    </>



                </div>
            </div>
            {uid && (
                <Navigate to={`/${uid}/app`} />
            )}
        </div>
    )
}

