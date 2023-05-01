import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import { Loading, ModalGroup } from './components';
import { useUserContext } from './contexts/UserContext';
import { UserContextType } from './@types/user';
import { useLoggedInContext } from './contexts/LoggedInContext';
import { LoggedInContextType } from './@types/loggedin';
import { NavBar } from './components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';



const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const Details = React.lazy(() => import('./pages/Details/Details'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const VerifyIdentity = React.lazy(() => import('./pages/VerifyIdentity/VerifyIdentity'));
const VerifyEmail = React.lazy(() => import('./pages/VerifyEmail/VerifyEmail'));
const VerifyPhoneNumber = React.lazy(() => import('./pages/VerifyPhoneNumber/VerifyPhoneNumber'));
const Onboarding = React.lazy(() => import('./pages/Onboarding/Onboarding'))
const Home = React.lazy(() => import('./pages/Home/Home'));
const Themes = React.lazy(() => import('./pages/Themes/Themes'));
const Theme = React.lazy(() => import('./pages/Theme/Theme'));
const Property = React.lazy(() => import('./pages/Property/Property'));

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #1363ff;
    --secondaryColor: #c5d8ff;
    --grey: #263238;
  }

  /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin & padding */
    * {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        height: 100vh;
        text-rendering: optimizeSpeed;
        // line-height: 1.5;
        background-color: #fff;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    // *::-webkit-scrollbar {
    //     display: none;
    // }

    // * {
    //     -ms-overflow-style: none;
    //     scrollbar-width: none;
    // }

    #root {
        max-width: 100vw;
        margin-inline: auto;
        position: relative;
        height: 100vh;
        
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }
    
    a {
      text-decoration: none;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }


    /*  */
    /*  */
    /*  */
    /* UTILITIES */
    .flex-align-center {
        display: flex;
        align-items: center;
    }

    .flex-justify-between {
        display: flex;
        justify-content: space-between;
    }

    .mr-auto {
        margin-right: auto !important;
    }

    .ml-auto {
        margin-left: auto !important;
    }
    
    .mt-auto {
        margin-top: auto !important;
    }

    .mx-auto {
        margin-inline: auto !important;
    }

    .color-grey {
        color: var(--grey) !important;
    }

    .color-white {
        color: var(--white) !important;
    }
    
    .color-black {
        color: var(--black) !important;
    }
    
    .color-primary {
        color: var(--primary-color) !important;
    }

    .mb-1 {
        margin-bottom: var(--value);
    }

    .mb-2 {
        margin-bottom: calc(var(--value) * 2);
    }

    .ml-2 {
        margin-left: calc(var(--value) * 2);
    }

    svg.color-white:hover{
        cursor: pointer;
    }

    .d-none{
        display: none;
    }

   @supports (-webkit-appearance: none) or (-moz-appearance: none) {

        input[type="checkbox"],
        input[type="radio"] {
            accent-color: var(--primary-color);
        }
    
    }

`

export default function App(): JSX.Element {
  const { user } = useUserContext() as UserContextType;

  const [isVerified, setIsVerified] = useState(false);
  const [uid, setUid] = useState<string>("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");

  const theme = useMemo(
    () => ({
        // colors
        black: "#464646",
        white: "#FFFFFF",
        grey: "#263238",
        red: "#D32600",

        // variable colors
        text: "#FFFFFF",
        background: "#fff",
        primaryColor: "#1363ff",
        secondaryColor: "#c5d8ff",
        fade: "#979797",

        // variables
        value: "10px",
    }),
    []
);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div >
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<PagesWrapper />}  >
                <Route index element={<Landing />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='register' element={<Register />} />
                <Route path="verify-email" element={<VerifyEmail />} />
                <Route path="verify-phoneNumber" element={<VerifyPhoneNumber />} />


                {/* <Route path='resetpassword' element={
                  <div className='fp_wrap'>
                    <div className='app'>
                      <Building />
                      <ForgotPassword
                        forgotPasswordEmail={forgotPasswordEmail}
                        setForgotPasswordEmail={setForgotPasswordEmail}
                      />
                    </div>
                  </div>
                }
                />

               

                 */}
                <Route path="*" element={<Landing />} />

                <Route path="/" element={<AuthPagesWrapper />}>
                  <Route path='app'>
                    <Route index element={<Home />} />
                    <Route path='themes' element={<Themes />} />
                    <Route path='theme/:id' element={<Theme />} />
                    <Route path='property/:id' element={<Property />} />
                  </Route>
                  <Route path='verification'>
                    <Route index element={<VerifyIdentity />} />
                    <Route path='stage2' element={<Onboarding />} />
                  </Route>
                  {user && (
                    <Route path='details' element={<Details />} />
                  )}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </div>
        <div><ModalGroup /></div>
      </Router>
    </ThemeProvider>
  );
}

const PagesWrapper = () => {
  const location = useLocation();
  // console.log("pageswrap")
  // const check = (user) => {
  // 	const options = ["photo", "bankAccount", "bankCode"];

  // 	return options.some((option) => !user.hasOwnProperty(option));
  // };

  // useEffect(() => {
  // 	if (user && check(user))) {
  // 		navigate("/details");
  // 	}
  // }, [user, navigate]);
  return (
    <>
      <Outlet />
    </>
  )
};

const AuthPagesWrapper = () => {
  const { user } = useUserContext() as UserContextType;
  const location = useLocation();
  const { isLoggedIn } = useLoggedInContext() as LoggedInContextType;
  const navigate = useNavigate();
  // console.log("apageswrap")


  useEffect(() => {
    // if (!user || !isLoggedIn) {
    //   console.log(user, isLoggedIn)
    //   navigate("/");
    // }
  }, []);

  return (
    <>
      {
        location.pathname.startsWith("/app") && <NavBar />}
      <Outlet />
    </>
  )
};



