import styled from "styled-components";
import { Placeholder1, Placeholder2, Placeholder3 } from "../assets";

export default function PropertyImages() {
    const placeholderImages = [Placeholder1, Placeholder2, Placeholder3]
    return (
        <Wrapper>
            <FirstImage src={placeholderImages[0]} alt="property" />
            <Images>
                {placeholderImages?.splice(1, placeholderImages.length)
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
    gap: 8px;
    
    
    img {
        height: 250px;
        border-radius: 4px;
    }

`

const FirstImage = styled.img`
    width: 100%;
    
`

const Images = styled.span`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: space-between;

    img {
        width: 48%;
    }

`