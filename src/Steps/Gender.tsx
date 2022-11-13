const Gender = ({ gender, setGender }: { gender: string, setGender: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div id='gender_step' className="step">
            <h2>What's your gender</h2>
            <p>Let's get to know you</p>
            <div className="form">
                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="male" id="male" />
                <label htmlFor="male">Male</label><br />

                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="female" id="female" />
                <label htmlFor="female" >Female</label><br />

                <input
                    onChange={(e) => setGender(e.target.value)} type="radio" name="prefer not to say" value="prefer not to say" id="4-5" />
                <label htmlFor="prefer not to say" >Prefer not to say</label><br />


            </div>
        </div>
    )
};

export default Gender;