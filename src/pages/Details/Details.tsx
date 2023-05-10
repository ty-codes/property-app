import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import {PreApp} from '../../components';
import './Details.css';
import Modal from 'react-modal';
import { partyhatIcon } from '../../assets';
import { useUserContext } from '../../contexts/UserContext';
import { UserContextType } from '../../@types/user';
import { Name, Gender, DateOfBirth, Password, Avatar } from "../../components"
import { Logo } from "../../assets/svg";


const steps: string[] = ['Name', 'Gender', 'Date of Birth', ' Password', 'continue', 'avatar'];

const customStyles = {
  content: {
    width: '350px',
    height: '350px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    marginTop: '25%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    overflow: "hidden",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
};


Modal.setAppElement('#root');

const Details = (): JSX.Element => {
  const { user, setUser } = useUserContext() as UserContextType;

  const [activeStep, setActiveStep] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  // let subtitle: any;

 
  const updateUserData = () => {
    setUser({
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      DOB: dob,
      id: 12
    });
  }

  return (
    <div id="details" >
      <div className="logo-wrap">
        <Logo />
        <span>Property</span>
      </div>
      <div className='details'>
        {activeStep === 6 ? (
          <PreApp />
        )
          : (
            <div>
              <div id="">
                <Stepper activeStep={activeStep}>
                  {steps.map((step) => (
                    <Step key={step}>
                      <StepLabel>{step}</StepLabel>

                    </Step>
                  ))}
                </Stepper>

                <div>
                  {
                    activeStep === 0
                      ? (
                        <Name
                          firstName={firstName}
                          lastName={lastName}
                          setFirstName={setFirstName}
                          setLastName={setLastName}
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                        />
                      )
                      : activeStep === 1
                        ? (
                          <Gender
                            gender={gender}
                            setGender={setGender} activeStep={activeStep}
                            setActiveStep={setActiveStep} />
                        )
                        : activeStep === 2
                          ? (
                            <DateOfBirth dob={dob} setDob={setDob} activeStep={activeStep}
                              setActiveStep={setActiveStep} />
                          )
                          : activeStep === 3
                            ? (
                              <Password
                                password={password}
                                setPassword={setPassword}
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                              />
                            )
                            : activeStep === 4
                              ? (
                                <div className="level" style={{alignItems: "center"}}>
                                  <img src={partyhatIcon} alt='congratulations_icon' />
                                  <h2>Congratulations</h2>
                                  <p style={{ padding: " 0 0.7em" }} className='capitalize'>Your account is finished and ready to explore</p>
                                  <button style={{alignSelf: "center"}} className='button filled_btn' onClick={() => { setActiveStep(activeStep + 1) }}>Let's Go</button>
                                </div>

                              )
                              : activeStep === 5
                                ? (
                                  <Avatar
                                    avatar={avatar}
                                    setAvatar={setAvatar}
                                    activeStep={activeStep}
                                    setActiveStep={setActiveStep}
                                  />
                                )

                                : (<Name
                                  firstName={firstName}
                                  lastName={lastName}
                                  setFirstName={setFirstName}
                                  setLastName={setLastName}
                                  activeStep={activeStep}
                                  setActiveStep={setActiveStep}
                                />)
                  }
                  {/* <button
                disabled
                  className={activeStep === 3 ? "btn filled_btn next_btn blank" : "btn filled_btn next_btn"}
                  onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                  Next
                </button> */}
                  <div className='finish' style={{ justifyContent: "center", display: "flex" }}>
                    <button
                     
                      disabled={!(password) && true}
                      onClick={() => { setActiveStep(activeStep + 1); updateUserData() }}
                      className={activeStep === 3 ? "button filled_btn" : "button filled_btn blank"}
                    >
                      Finish
                    </button>
                  </div>

                </div>
              </div>
            </div>


          )}

      </div>
    </div>


  )
};

export default Details;