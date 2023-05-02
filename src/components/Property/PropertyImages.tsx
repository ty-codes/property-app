import styled from "styled-components";
import { Placeholder1, Placeholder2, Placeholder3 } from "../../assets";
import { device } from "../../constants";


export default function PropertyImages() {
    const placeholderImages = [Placeholder1, Placeholder2, Placeholder3]
    return (
        <Wrapper>
            <Images>
                {placeholderImages?.splice(0, placeholderImages.length)
                    .map((image) => (
                        <img src={image} alt="property" />
                    ))
                }

            </Images>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    
    img {
        height: 200px;
         width: 180px;
        border-radius: 10px;

        @media ${device.mobileL} {
            width: auto;
            height: 160px;
        }
    }

`;

const Images = styled.span`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`