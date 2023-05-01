import styled from "styled-components"
import { obve1, obve2, obve3, obve4, obve5, obve6 } from "../../assets";

interface Props {
    bg?: string
}

export default function SimilarProjects() {
    const placeholder = [
        obve1, obve2, obve3, obve4, obve5, obve6
    ]
    return (
        <Wrapper>
            <h2>similar projects done by this company</h2>
            <Projects>
                {placeholder?.map((image) => (
                    <Project>
                        <Image bg={image}>
                            <span></span>
                            <div>
                                <h3>ocean view beach estate</h3>
                            <p>lekki pennisula, lagos island, lagos</p>
                            </div>
                            
                        </Image>
                        <div className="text">
                            <div>
                                <Column>
                                    <p>Min. invest amount</p>
                                    <p>10, 000</p>
                                </Column>
                                <Column>
                                    <p>Return rate</p>
                                    <p>5.00%</p>
                                </Column>
                                <Column>
                                    <p>Price per unit</p>
                                    <p>600</p>
                                </Column>
                            </div>
                            <div>
                                <Column>
                                    <p>Min. invest amount</p>
                                    <p>10, 000, 000</p>
                                </Column>
                                <Column>
                                    <p>Target duration</p>
                                    <p>5 years</p>
                                </Column>
                                <Column>
                                    <p>square meter</p>
                                    <p>678 sq</p>
                                </Column>
                            </div>
                        </div>

                    </Project>
                ))}

            </Projects>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100%;

    h2 {
        text-transform: capitalize;
        font-weight: 700;
    }
`

const Projects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Project = styled.div`
   .text {
    display: flex;
    justify-content: space-between;
   }
`;

const Column = styled.span`
    display: flex;
    flex-direction: column;

    p{
        color:${props => props.theme.black};
        font-weight: 600;
    }
`;

const Image = styled.span<Props>`
    position: relative;
    
    & > span {
        background-image: url(${props => props.bg});
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        padding: 1em;
        height: 300px;
        width: 300px;
    }

    & > div {
        padding: 0 10px;
        position: absolute;
        width: 100%;
        bottom: 0;
        background: linear-gradient(0deg, #667085 -129.25%, rgba(102, 112, 133, 0) 76.42%);
        
        h3, p {
            color: white;
            font-weight: 700;
            margin: 0;
            text-align: left;

        }
        p{
            font-size: 12px;
        }
    }

    
`;