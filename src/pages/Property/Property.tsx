import { useParams } from "react-router-dom";
import styled from "styled-components";
import { 
    PropertyImages, FundsInformation, 
    PropertyDescription, PropertyDetails, 
    ClosingDocuments, Stats, Summary, 
    SimilarProjects, Graphs, Reviews,
    Sponsors,
} from "../../components";
import {device} from "../../constants";

export default function Property() {
    const { slug } = useParams();
    return (
        <div className="outlet">
            <Wrapper>
                <section>
                    <PropertyImages />
                    <Graphs />
                    <Stats />
                    <FundsInformation />
                    <Sponsors />
                </section>
                <section>
                <PropertyDescription />
                <PropertyDetails />
                <Summary />
                <ClosingDocuments />
                </section>
            </Wrapper>
            <Reviews />
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

    @media ${device.isSmallDevice} {
        flex-direction: column-reverse;
    }
    
    section {
        width: 49%;
        height: 100%;

        @media ${device.isSmallDevice} {
            width: 100%;
        }
    }
`