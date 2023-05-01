import styled from "styled-components";

export default function Summary() {
    return (
        <>
        <h3>Offering summary</h3>
        <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore a, aperiam officia facilis debitis ab! Nobis nemo libero voluptatum, impedit ipsum officia magni consequatur architecto tempora quae ad, magnam vitae.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid cumque vel suscipit ex, qui iure quasi quidem impedit ab aperiam labore repellendus natus perspiciatis accusamus aspernatur dignissimos tempore enim quia?
            </Text>
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