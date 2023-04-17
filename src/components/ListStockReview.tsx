import {useState} from "react";
import styled from "styled-components";

export default function ListStockReview () {
    const [textLength, setTextLength] = useState<number>(0);
    return ( 
        <Wrapper>
            <h3>Leave a review</h3>
            <h6>{textLength}/100</h6>
            <textarea maxLength={100} onChange={(e) => setTextLength(e?.target?.value?.length)} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    h6 {
        fontsize: 0.7em;
    }

    textarea {
        height: 200px;
        background-color: #fafafa;
        width: 100%;
        border: none;
        color: #131313;
        border-radius: 4px;
    }

    textarea:focus, textarea:active {
        outline: 1px solid ${props => props.theme.secondaryColor};
    }
`