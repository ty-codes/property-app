import styled from "styled-components";
import { themes } from "../constants";

export default function Categories() {
    return (
        <>
            <Header>
                <p>Check out these categories to discover new stocks</p>
            </Header>
            <Wrapper>
                {themes.slice(0, 7).map(category => (
                    <Category style={{ backgroundColor: `${category.background}` }} >
                        <span>
                            <img src={category.image} alt="bank" />
                        </span>
                        <div>
                            <h5>{category.header}</h5>
                            <p>{category.text}</p>
                        </div>
                    </Category>
                ))}
            </Wrapper>
        </>
    )
}

const Header = styled.div`
    margin-top: 3em;

    p {
        text-align: left;
        font-size: 0.9em;
        color: var(--grey);
        font-weight: 600;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.8em;
`;

const Category = styled.div`
height: 280px;
    width: 250px;
    margin: 0 0.8em 0 0;
    border-radius: 10px;
    flex-shrink: 0;
    position: relative;
    /* padding: 20px; */
    border: none;

    img {
        width: 80%;
        height: 180px;
    }

    h5 {
        color: white;
        font-size: 0.8em;
        text-align: left;
        text-transform: capitalize;
    }

    p {
        color: white;
        font-size: 0.6em;
        text-align: left;
        text-transform: capitalize;
    
    }

    & > div {
        padding: 0 10px;
        position: absolute;
        border-radius: 10px;
        width: 100%;
        bottom: 0;
        background: linear-gradient(0deg, #667085 -129.25%, rgba(102, 112, 133, 0) 76.42%);
    }

    span {
        background-image: url(../../assets/spiral.png);
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        padding: 1em;
    }

    @media (max-width: 850px) {
            width: 220px;
    }
`
