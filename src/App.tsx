import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Building from './components/Building/Building';
import Home from './pages/Home/Home';
import Loading from './components/Loading';

const SignIn = React.lazy(() => import('./pages/SignIn/SignIn'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const CollectData = React.lazy(() => import('./components/CollectData/CollectData'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword/ForgotPassword'));


export default function App(): JSX.Element {
  const [isVerified, setIsVerified] = useState(false);
  const [uid, setUid] = useState<string>("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");

  const placeholder = {
    first_name: "",
    last_name: "",
    gender: "",
    secret: "",
    DOB: "",
    id: ""
  }
  const [user, setUser] = useState<userData>(placeholder);

  type userData = {
    readonly first_name: string,
    readonly last_name: string,
    readonly gender: string,
    readonly secret: string,
    readonly DOB: string,
    readonly id: string
  }

  return (
    <>

      <Router>
        <div >
          <Routes>

            <Route path='/' element={
              <div className='home_wrap'>
                <div className='app '>
                  <Building />
                  <Home />
                </div>
              </div>


            }
            />

            <Route path='signin' element={
              <div className='signin_wrap'>
                <div className='app'>
                  <Building />
                  <Suspense fallback={<Loading />}>
                    <SignIn
                      uid={uid}
                      setUid={setUid}
                    />
                  </Suspense>

                </div>

              </div>

            }
            />

            <Route path='register' element={
              isVerified ? <Navigate to={`/${uid}/verify`} /> :
                <div className='register_wrap'>
                  <div className='app'>
                    <Building />
                    <Suspense fallback={<Loading />}>
                      <Register
                        uid={uid}
                        setUid={setUid}
                        isVerified={isVerified}
                        setIsVerified={setIsVerified} />
                    </Suspense>
                  </div>
                </div>


            }
            />

            <Route path=':id/verify' element={
              <Suspense fallback={<Loading />}>
                <CollectData
                  uid={uid}
                  setUid={setUid}
                  user={user}
                  setUser={setUser}
                />
              </Suspense>

            }

            />

            <Route path=':id/app' element={
              <Suspense fallback={<Loading />}>
                <>The Property App</>
              </Suspense>
            }
            />

            <Route path='resetpassword' element={
              <div className='fp_wrap'>
              <div className='app'>
                <Building />
                <Suspense fallback={<Loading />}>
                  <ForgotPassword
                    forgotPasswordEmail={forgotPasswordEmail}
                    setForgotPasswordEmail={setForgotPasswordEmail}
                  />
                </Suspense>
              </div>
              </div>
            }
            />
            <Route path="*" element={
              <div className='home_wrap'>
              <div className='app '>
                <Building />
                <Home />
              </div>
            </div>

            }/>
          </Routes>

        </div>
      </Router>
    </>
  );
}


