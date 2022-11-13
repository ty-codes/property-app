import './Home.css';
import {Link} from 'react-router-dom';


export default function Home(): JSX.Element {
    return (
        <div id="home" className="wrap">
            <div className="wrapper" >
                <div className="mini_container">
                    <h1 className="heading capitalize"> We are<br /> the competition</h1>
                    <p className="subtitle capitalize">bridging the real estate capital barrier</p>
                    <button className='btn filled_btn'><Link to='/register'>Get started</Link></button>
                    <button className='btn outlined_btn'><Link to='/signin'>Log In</Link></button>
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
