const Gender = ({ gender, setGender, activeStep, setActiveStep }:
    {
        gender: string,
        setGender: React.Dispatch<React.SetStateAction<string>>,
        activeStep: number,
        setActiveStep: React.Dispatch<React.SetStateAction<number>>

    }) => {
    return (
        <div className="level">
            <h2>What's your gender</h2>
            <p>Let's get to know you</p>
            <div>
                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="male" id="male" />
                <label style={{paddingLeft: "2em", fontSize: "1.1em"}} htmlFor="male">Male</label><br />

                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="female" id="female" />
                <label style={{paddingLeft: "2em", fontSize: "1.1em"}} htmlFor="female" >Female</label><br />

                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="prefer not to say" value="prefer not to say" id="4-5" />
                <label style={{paddingLeft: "2em", fontSize: "1.1em"}} htmlFor="prefer not to say" >Prefer not to say</label><br />


            </div>
            <button
                style={{marginTop: "1em"}}
                disabled={!(gender) && true}
                className={activeStep === 3 ? "btn filled_btn blank" : "btn filled_btn"}
                onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                Next
            </button>
        </div>
    )
};

export default Gender;