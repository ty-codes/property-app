import { avatars } from '../../constants';
import './Steps.css';
import React from "react";

const Avatar = ({ avatar, setAvatar, activeStep, setActiveStep }: {
    avatar: string, setAvatar: React.Dispatch<React.SetStateAction<string>>, activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}): JSX.Element => {

    const setRing = (key: number) => {
        document.getElementById(`avatar${key}`)?.classList.add('ring');
        document.querySelector('html')?.addEventListener('click', function (e) {
            if (e.target != document.getElementById(`avatar${key}`)) {
                document.getElementById(`avatar${key}`)?.classList.remove('ring')
            }
        })
    }
    return (
        <div className="level">
            <h2 className="capitalize">Choose your avatar</h2>
            <div className="avatars">
                {
                    avatars.map((avatar: any, key: number) => (
                        <img className="avatar_image" id={`avatar${key}`} key={`are${key}`} onClick={() => { setAvatar(key.toString()); setRing(key) }} src={avatar.image} alt='avatar' />
                    ))
                }
            </div>
            <button
                style={{ marginTop: "1em" }}
                disabled={!(avatar) && true}
                className={activeStep === 3 ? "btn filled_btn blank" : "btn filled_btn"}
                onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                Next
            </button>
        </div>
    )
}

export default Avatar;