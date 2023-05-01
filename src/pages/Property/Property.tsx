import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PropertyImages, FundsInformation, PropertyDescription, PropertyDetails, ClosingDocuments, Stats, Summary, SimilarProjects } from "../../components";


export default function Property() {
    const { slug } = useParams();
    return (
        <div className="outlet">
            <Wrapper>
                <section>
                    <PropertyImages />
                    <Stats />
                    <FundsInformation />
                </section>
                <section>
                <PropertyDescription />
                <PropertyDetails />
                <Summary />
                <ClosingDocuments />
                </section>
            </Wrapper>
            <SimilarProjects />
        </div>

    )
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    margin-top: 2em;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
    section {
        width: 49%;
        height: 100%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`