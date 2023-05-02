import styled from "styled-components";

export default function Sponsors(): JSX.Element {
    return (
        <>
            <h3>sponsors information</h3>
            <Row>
                <p>track record</p>
            </Row>
            <h3>track record</h3>
            <Text>
                please click here to view the track record for
                new era companies
            </Text>
            <h3>experience by numbers</h3>
            <ul>
                <li><Text>historical portfolio activity: $500M</Text></li>
                <li><Text>assets under management: $300M</Text></li>
                <li><Text>s.f under management: -500, 000 s.f</Text></li>
                <li><Text>properties under management: 12</Text></li>
                <li><Text>35+ properties developed/acquired</Text></li>
                <li><Text>15+ years of experience</Text></li>
            </ul>
        </>
    )
}

const Text = styled.p`
    text-align: left;
    text-align: justify;
    font-weight: lighter;
    font-size: 14px;
    width: 100%;
    word-spacing: 5px;
    color: ${props => props.theme.fade};
    line-height: 1.7rem;
`;

const Row = styled.span`
    display: flex;
    justify-content: space-between;    
    background-color: ${props => props.theme.secondaryColor};
    padding: 8px;
    align-items: center;

    p {
        text-transform: capitalize;
        text-align: left;
        font-weight: 700;
        margin: 0;
        color: ${props => props.theme.primaryColor};
    }
`;