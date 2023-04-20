import styled from 'styled-components';
import logo from '../assets/logo.png';
import { building } from '../assets';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

interface IWrapper {
    bg?: string,
    landing?: boolean
}


const Building = ():JSX.Element => {
    const location = useLocation();
    const [landing, ] = useState(location.pathname==="/")

    return (
        <Wrapper landing={landing} bg={building}>
            <div className="logo_wrap">
                <img className='logo' src={logo} alt="logo" />
                <span>Property</span>
            </div>

            <div id="home-modal" >
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
        </Wrapper>
    )
};



const Wrapper = styled.div<IWrapper>`
    height: 100vh;
    width: calc(100% - 600px);
    background: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 800px) {
        width: 0;
        display: none;
    }
    
    @media (max-width: 520px) {
            display: ${props => props.landing ? "flex" : "none"};
            width: 100% !important;
            background-position: center;
            // border-radius: 0 0 50% 50%;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    @media (min-width: 1600px) {
        width: calc(100% - 700px);
    }

    @media (min-width: 1900px) {
        width: calc(100% - 900px);
    }

    .logo_wrap {
        left: 2em;
        top: 3.5em;
        position: absolute;
        color: #fff;
        font-weight: 600;
        display: flex;

        span {
            margin: auto 1em;
            
            @media (max-width: 520px) {
                display: none;
            }
        }

        @media (max-width: 520px) {
            display: flex;
            justify-content: center;
            margin-top: 11em;
            position: relative;
            left: 0;
        }
        @media (max-height: 650px) {
            display: none;
        }
    }

    .logo {
        margin: 0em;
        width: 58px;
    }

    #home-modal {
        display: none;

        @media (max-width: 520px) {
            display: block;
            background-color: white;
            text-align: center;
            text-align-last: center;
            padding: 20px;
            width: 90%;
            align-self: center;
            border-radius: 10px;
            margin-bottom: 1em;
        }

        button {
            @media (max-width: 520px) {
                width: 90%;
            }
           
        }
        
    }

`;


export default Building;