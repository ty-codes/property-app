import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PropertyImages, PropertyDescription, PropertyDetails } from "../../components";


export default function Property() {
    const { slug } = useParams();
    return (
        <div className="outlet">
            <Wrapper>
                <section>
                    <PropertyImages />
                </section>
                <section>
                <PropertyDescription />
                <PropertyDetails />
                </section>
            </Wrapper>
        </div>

    )
};

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    margin-top: 2em;
    
    section {
        width: 48%;
        height: 100%;
    }
`