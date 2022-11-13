import hero from '../../assets/pana.png';
import { Link } from 'react-router-dom';

const PreApp = ({ uid }: { uid: string }): JSX.Element => {
    return (
        <>
            <div id='collect_data' className='preapp'>
                <img src={hero} alt="hero" />
                <h2 className="capitalize main_text">now let's get to the good part</h2>

                <button className="btn filled_btn">
                    <Link to={`/${uid}/app`}>Continue</Link>
                </button>
            </div>

           

        </>
    )
};

export default PreApp;