import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";

const DataLink = ({text, link, placeholder}: {text:string, link:string, placeholder:string}) => {
	const isMobile = useMediaQuery({ maxWidth: 520 });

    return(
        <Wrapper>
            <h2>{text}</h2>
            <Link to={`${link}`}>
                {isMobile ? <RightOutlined /> : placeholder}
            </Link>
        </Wrapper>
    )
}

export default DataLink;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: #FFFFFF;
    border: 1px solid #9EC8F1;
    border-radius: 7px;
    margin: 2em 0;
    align-items: center;

    h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    text-transform: capitalize;
    color: #263238;
    margin: 0;
    }

    a {
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    text-transform: capitalize;
    color: #979797;
    cursor: pointer;
    }

    svg {
        align-self: center;
    }
`