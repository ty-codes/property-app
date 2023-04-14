import { CustomInput } from "../../components";
import React from "react";

const DateOfBirth = ({ dob, setDob, activeStep, setActiveStep }: {
    dob: string, setDob: React.Dispatch<React.SetStateAction<string>>, activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <div className="level">
            <h2>What's your date of birth</h2>
            <p>Let's get to know you</p>
            <div>
                <label htmlFor='dob'>D.O.B</label>
                <br />
                <CustomInput
                    type="date"
                    value={dob ? dob : ""}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setDob(e.target.value) }}
                    name='dob'
                    required
                />
            </div>
            <button
                style={{ marginTop: "1em" }}
                disabled={!(dob) && true}
                className={activeStep === 3 ? "btn filled_btn blank" : "btn filled_btn"}
                onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                Next
            </button>
        </div>
    )
};

export default DateOfBirth;