import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import success from '../../assets/success.svg';
import { useLoggedInContext } from "../../contexts/LoggedInContext";
import { LoggedInContextType } from "../../@types/loggedin";
import { Building, CustomInput } from "../../components";
import { useUserContext } from '../../contexts/UserContext';
import { UserContextType } from '../../@types/user';
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserOutlined } from "@ant-design/icons";
import {
    googleIcon,
    facebookIcon
} from "../../assets";
import styled from "styled-components";

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

export default function Register(): JSX.Element {
    const [access, setAccess] = useState<string>('email');
    const [email, ] = useState<string>('');
    const [phoneNumber, ] = useState<string>('');
    const [code, ] = useState<string[]>([]);
    const [show, setShow] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false);
    const [disable, setDisabled] = useState(true);
    const [showCodeForm, setShowCodeForm] = useState(false)

    useEffect(() => {
        setDisabled(false);
    }, [code.length === 4]);

    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";


    type Placeholder = {
        email: string,
        phoneNumber: string,
        accessType: string,
    }
    let subtitle: any;
    const navigate = useNavigate();

    const userPlaceholder: Placeholder = {
        email: email,
        phoneNumber: phoneNumber,
        accessType: access,
    }



    return (
        <Wrapper className="pagewrapper">
            <Building />
            {
                <div className="page">
                    <div>
                        <h2 className="heading capitalize">Sign up To Property</h2>
                        <p className="subtitle capitalize">let's get to know you</p>
                        <Tabs>
                            <span
                                onClick={() => setAccess('email')}
                                id={access === 'email' ? 'active' : "inactive"}
                            >Email</span>
                            <span
                                onClick={() => setAccess('phone')}
                                id={access === 'email' ? 'inactive' : "active"}
                            >Phone Number</span>
                        </Tabs>

                        <>
                            {(access === 'email')
                                ? <EmailSignupForm setShowCodeForm={setShowCodeForm} />
                                : <PhoneSignUpForm setShowCodeForm={setShowCodeForm} />
                            }
                            <h6 className="register_link">Already have an account? <Link className='link' to="/signin" >Sign in</Link></h6>
                        </>
                    </div>

                </div>
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
                    <button className="button filled_btn" onClick={() => { console.log("true") }}>Continue</button>

                </div>

            </Modal>


        </Wrapper>
    )
}

const EmailSignupForm = ({ setShowCodeForm }: { setShowCodeForm: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {
    const { setUser } = useUserContext() as UserContextType;
    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";
    const navigate = useNavigate();


    const initialValues = {
        email: "",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Please enter your email/phone number"),
    });

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                console.log(values);
                navigate(`/verify-email?email=${values.email}`);
            },
        });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <CustomInput
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        required
                        onBlur={handleBlur}
                        error={errors.email}
                        touched={touched.email}
                        lefticon={<UserOutlined />}
                    />
                </>

                <button className="button filled_btn" type="submit">Continue</button>
            </form>
            <Divider>
                <div></div>
                <span>OR</span>
                <div></div>
            </Divider>
            <>
                <button className='button outlined_btn'><Span><img src={googleIcon} alt='google_icon' />Continue with Google</Span></button>
                <br />
                <button className='button outlined_btn'><Span><img src={facebookIcon} alt='fb_icon' />Continue with Facebook</Span></button>
            </>
        </>

    )
}

const PhoneSignUpForm = ({ setShowCodeForm }: { setShowCodeForm: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext() as UserContextType;
    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";
    const navigate = useNavigate();


    const initialValues = {
        phoneNumber: "",
    };
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required("Please enter your phone number"),
    });

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                console.log(values);
                navigate(`/verify-phoneNumber?phoneNumber=${values.phoneNumber}`);
            },
        });
    return (
        <form onSubmit={handleSubmit}>
            <>
                <CustomInput
                    value={values.phoneNumber}
                    name="phoneNumber"
                    type="tel"
                    required
                    maxLength={11}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    lefticon={<span className="tel">+234</span>}
                />
            </>
            <button className="button filled_btn"
                type="submit"

            >Continue</button>
            <div className="divider">
                <div></div>
                <span>OR</span>
                <div></div>
            </div>
            <>
                <button className='button outlined_btn'><Span><img src={googleIcon} alt='google_icon' />Continue with Google</Span></button>
                <br />
                <button className='button outlined_btn'><Span><img src={facebookIcon} alt='fb_icon' />Continue with Facebook</Span></button>
            </>
            {/* <br /> */}
            {/* <Link to='/resetpassword' className="link capitalize">Forgot password?</Link> */}
        </form>
    )

}

const Span = styled.span`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    @media (max-width: 520px) {
        text-align: left;
        font-size: 0.9em;
    }
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0px;
    justify-content: center;

    div {
        width: 100px;
        height: 1px;
        background-color: rgb(197, 204, 202);
    }

    span {
        padding: 0px 10px;
        font-weight: bold;
    }

`;

const Tabs = styled.div`
    width: 20em;
    display: flex;
    justify-content: center;
    margin: 1em auto;

    @media (max-width: 340px) {
        width: 17.7em;
    }

    #active {
        color: ${props => props.theme.primaryColor};
        border-bottom: 3px solid ${props => props.theme.primaryColor};
        width: 50%;
        margin: 0;
    }
    
    #inactive {
        width: 50%;
        margin: 0;
        color: #979797;
    }
`;

