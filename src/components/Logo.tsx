import { Logo as LogoIcon } from "../assets/svg";
import styled from "styled-components";
import { device } from "../constants";


export default function Logo() {
    return (
    <Wrapper>
            <LogoIcon />
            <span></span>
      </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: row;
    justify-content: left;
    padding: 0 8px;
    margin-bottom: 0;
    height: 80px;

    @media ${device.mobileL} {
      height: 45px;
    }

    span {
      margin: 0 0.5em;
      color: ${props => props.theme.primaryColor};
      font-weight: 800;

      @media ${device.mobileL} {
        font-size: 0.9em;
      }
    } 
`;