import './Landing.css';
import { Link } from 'react-router-dom';
import { UserContextType } from '../../@types/user';
import { useUserContext } from '../../contexts/UserContext';
import { Building } from '../../components';


export default function Landing(): JSX.Element {
    const { user } = useUserContext() as UserContextType;
    return (
        <div id='homewrapper' className='pagewrapper'>
            <Building/>
            <div id="home" className="homepage">
                    <div>
                        <h1 className="heading capitalize"> We are<br /> the competition</h1>
                        <p className="subtitle capitalize">bridging the real estate capital barrier</p>
                        <button className='button filled_btn'><Link to='/register'>Get started</Link></button>
                        <button className='button outlined_btn'><Link to='/signin'>Log In</Link></button>
                        <p className='policy'>By selecting one or the other, you are agreeing to the</p>
                        <p className='policy_link capitalize'>
                            <Link to='/'>terms of services </Link>
                            <span>&</span>
                            <Link to='/'> privacy policy</Link>
                        </p>
                </div>
            </div>
        </div>


    )
}
