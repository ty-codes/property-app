import './Steps.css';

const Name = (
    { firstName, lastName, setFirstName, setLastName }
        : {
            firstName: string,
            lastName: string,
            setFirstName: React.Dispatch<React.SetStateAction<string>>,
            setLastName: React.Dispatch<React.SetStateAction<string>>
        }): JSX.Element => {
            
    return (
        <div id='name_step' className='step'>
            <h2>What's your name</h2>
            <p>Let's get to know you</p>
            <div className="form">
                <label htmlFor='first_name'>First Name</label>
                <br /><input value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    name='first_name' placeholder='First name' type='text' required />

                <br /><label htmlFor='last_name'>Last Name</label>
                <br /><input value={lastName}
                    onChange={(e) => setLastName(e.target.value)} name='last_name' placeholder='Last name' type='text' required />

            </div>
        </div>
    )
};

export default Name;