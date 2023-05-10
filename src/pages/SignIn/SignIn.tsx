import { useState } from "react";
// import './SignIn.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import {
    googleIcon,
    facebookIcon
} from "../../assets";
import { setToStorage } from "../../constants";
import { useUserContext } from '../../contexts/UserContext';
import { UserContextType } from '../../@types/user';
import { useLoggedInContext } from '../../contexts/LoggedInContext';
import { LoggedInContextType } from '../../@types/loggedin';
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Building, CustomInput } from "../../components";
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

export default function SignIn(): JSX.Element {
    const [access, setAccess] = useState('email');
    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";
    const { user, setUser } = useUserContext() as UserContextType || "";


    return (
        <Wrapper className="pagewrapper">
            <Building />
            <div className="page">
                <div  >
                    <div>
                        <h2 className="heading">Sign in To Property</h2>
                        <p className="subtitle capitalize">Hey there, welcome back</p>
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
                                ? <EmailLoginForm />
                                : <PhoneLoginForm />
                            }
                            <h6 className="register_link">Haven't signed up yet? <Link className='link' to="/register" >Create an account</Link></h6>
                        </>
                    </div>
                </div>
                {/* {isLoggedIn && (
                    <Navigate to={`/app`} />
                )} */}
            </div>
        </Wrapper>

    )
};

const PhoneLoginForm = (): JSX.Element => {
    const { setUser } = useUserContext() as UserContextType;
    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";
    const navigate = useNavigate();

    const authenticateUser = (data: {
        phoneNumber: string;
        password: string;
    }): void => {
        // backend auth here w/ password
        if (data?.phoneNumber) {
            var token: string = "12345";
            // set user object from backend
            setUser({
                id: 1,
                first_name: "John",
                last_name: "Doe",
                email: "user@gmail.com",
            });
            setToStorage("token", token);
            setIsLoggedIn(token);
            navigate("/app")
        }
    }

    const initialValues = {
        phoneNumber: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required("Please enter your phone number"),
        password: Yup.string().required("Please enter your password"),
    });

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                authenticateUser(values)
            },
        });
    return (
        <form onSubmit={handleSubmit}>
            <>
                <CustomInput
                    value={values.phoneNumber}
                    name="phoneNumber"
                    className="last"
                    type="tel"
                    required
                    maxLength={11}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.password}
                    touched={touched.password}
                    lefticon={<span>+234</span>}
                />
                <CustomInput
                    className=""
                    name="password"
                    autoComplete="on"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                    lefticon={<LockOutlined size={22} className="color-white" />}
                />
            </>
            <button className="button filled_btn"
                type="submit"

            >Sign in</button>
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
            <br />
            <h6>
                <Link to='/resetpassword' className="link capitalize">Forgot password?</Link>
            </h6>
        </form>
    )

}

const EmailLoginForm = (): JSX.Element => {
    const { user, setUser } = useUserContext() as UserContextType;
    const { isLoggedIn, setIsLoggedIn } = useLoggedInContext() as LoggedInContextType || "";
    const navigate = useNavigate();


    const authenticateUser = (data: {
        email: string;
        password: string;
    }): void => {
        // backend auth here w/ password
        console.log(data)
        if (data?.email) {
            var token: string = "12345";
            // set user object from backend
            setUser({
                id: 1,
                first_name: "John",
                last_name: "Doe",
                email: data?.email,
            });
            setToStorage("token", token);
            setIsLoggedIn(token);
            navigate("/app");
        }
    }

    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Please enter your email/phone number"),
        password: Yup.string().required("Please enter your password"),
    });

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                authenticateUser(values)
            },
        });

    return (
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
                <CustomInput
                    className=""
                    name="password"
                    autoComplete="on"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                    lefticon={<LockOutlined size={22} className="color-white" />}
                />
            </>
            <button className="button filled_btn"
                type="submit"

            >Sign in</button>
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
            <br />
            <h6>
                <Link to='/resetpassword' className="link capitalize">Forgot password?</Link>

            </h6>
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
