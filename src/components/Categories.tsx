import styled from "styled-components";
import { themes } from "../constants";
import spiral from "../assets/spiral.png";

interface IProps {
    bg?: string
}
export default function Categories() {
    return (
        <>
            <Header>
                <p>Check out these categories to discover new stocks</p>
            </Header>
            <Wrapper>
                {themes.slice(0, 7).map((category, id) => (
                    <Category 
                    key={`category-ra-${id}`} 
                    style={{ backgroundColor: `${category?.background}` }} 
                    bg={spiral}
                    >
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

const Category = styled.div<IProps>`
    height: 280px;
    width: 250px;
    margin: 0 0.8em 0 0;
    border-radius: 10px;
    flex-shrink: 0;
    position: relative;
    border: none;

    img {
        width: 85%;
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
        background-image: url(${props => props.bg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        padding: 1em;
    }

    @media (max-width: 850px) {
            width: 220px;
    }
`
