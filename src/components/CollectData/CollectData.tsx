import { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { Link, Route, useNavigate } from 'react-router-dom';
import Name from '../../Steps/Name';
import Gender from '../../Steps/Gender';
import DateOfBirth from '../../Steps/DateOfBirth';
import Password from '../../Steps/Password';
import '../../pages/SignIn/SignIn.css';
import Avatar from '../../Steps/Avatar/Avatar';
import PreApp from '../PreApp/PreApp';
import './CollectData.css';
import Modal from 'react-modal';
import logo from "../../assets/Logo.png";


type userData = {
  readonly first_name: string,
  readonly last_name: string,
  readonly gender: string,
  readonly secret: string,
  readonly DOB: string,
  readonly id: string
}
const steps: string[] = ['Name', 'Gender', 'Date of Birth', ' Password', 'continue', 'avatar'];

const customStyles = {
  content: {
    width: '35%',
    height: '40vh',
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

const CollectData = ({ user, setUser, uid, setUid }: {
  user: userData,
  setUser: React.Dispatch<React.SetStateAction<userData>>
  uid: string,
  setUid: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {

  const [activeStep, setActiveStep] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  // state validates if data has been stored by backend
  const [data, setData] = useState({});

  const navigate = useNavigate();

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle ? subtitle.style.color = 'hsl(220, 13%, 13%)' : null;
  // }
  function closeModal() {
    setIsOpen(false);
  }
  const updateUserData = () => {
    setUser({
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      secret: password,
      DOB: dob,
      id: uid
    });
  }

  const checkId = () => {
    console.log(user)
    // send id for verificaion to backend before rerouting to
    // if success status code
    if (uid === '12345') {
      setActiveStep(activeStep + 1)
    } else {
      throw "invalid id"
    }
  };

  const SuccessModal = (): JSX.Element => {
    return (
      <Modal
        isOpen
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        className="myModal"
        contentLabel="Example Modal"
      >
        <div className='modal_content_wrap'>
          <img src={require('../../assets/congrats.png')} alt='congratulations_icon' />
          <h2>Congratulations</h2>
          <p className='capitalize'>Your account is finished and ready to explore</p>
          <button className='btn filled_btn' onClick={() => { setActiveStep(activeStep + 1) }}>Let's Go</button>
        </div>

      </Modal>
    )
  }

  return (
    
    <div className='wrap collect_data'>
      {activeStep === 6 ? (
        <PreApp uid={uid} />
      )
        : (
          <div className='data_wrap'>
            <div className="logo_wrap">
              <img className='logo' src={logo} alt="logo" />
              <span>Property</span>
            </div>

            <div id="collect_data">
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
                      />
                    )
                    : activeStep === 1
                      ? (
                        <Gender
                          gender={gender}
                          setGender={setGender} />
                      )
                      : activeStep === 2
                        ? (
                          <DateOfBirth dob={dob} setDob={setDob} />
                        )
                        : activeStep === 3
                          ? (
                            <Password
                              password={password}
                              setPassword={setPassword} />
                          )
                          : activeStep === 4
                            ? (
                              <SuccessModal
                              />
                            )
                            : activeStep === 5
                              ? (
                                <Avatar
                                  avatar={avatar}
                                  setAvatar={setAvatar}
                                />
                                // avatar={avatar}
                                //  setAvatar={setAvatar}
                                //  updateUserData={updateUserData} 

                              )

                              : (<Name
                                firstName={firstName}
                                lastName={lastName}
                                setFirstName={setFirstName}
                                setLastName={setLastName} />)
                }
                <button
                  className={activeStep === 3 ? "btn filled_btn next_btn blank" : "btn filled_btn next_btn"}
                  onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                  Next
                </button>
                <button
                  onClick={() => { setActiveStep(activeStep + 1); updateUserData() }}
                  className={activeStep === 3 ? "btn filled_btn next_btn" : "btn filled_btn next_btn blank"}
                >
                  Finish
                </button>
              </div>


            </div>
          </div>


        )}

    </div>

  )
};

export default CollectData;