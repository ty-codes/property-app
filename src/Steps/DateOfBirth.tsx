const DateOfBirth = ({ dob, setDob }: { dob: string, setDob: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div id='dob_step' className="step">
            <h2>What's your date of birth</h2>
            <p>Let's get to know you</p>
            <div className="form">
                <label htmlFor='dob'>D.O.B</label>
                <br /><input value={dob ? dob : ""}
                    onChange={(e) => { setDob(e.target.value) }} name='dob' type='date' required />

            </div>

        </div>
    )
};

export default DateOfBirth;