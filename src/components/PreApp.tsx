import { Link } from 'react-router-dom';
import { hero } from '../assets';

const PreApp = (): JSX.Element => {
    return (
        <>
            <div className='level'>
                <img className='preapp-hero' src={hero} alt="hero" />
                <h2 style={{fontSize: "1.8em", marginBottom: "1em"}} className="capitalize">now let's get to the good part</h2>

                <button style={{alignSelf: "center"}} className="btn filled_btn">
                    <Link to={`/verification`}>Continue</Link>
                </button>
            </div>
        </>
    )
};

export default PreApp;