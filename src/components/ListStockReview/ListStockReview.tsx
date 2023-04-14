import "./ListStockReview.css";
import {useState} from "react";

export default function ListStockReview () {
    const [textLength, setTextLength] = useState<number>(0);
    return ( 
        <div id="stock-review">
            <h3>Leave a review</h3>
            <h6 style={{fontSize: "0.7em"}}>{textLength}/100</h6>
            <textarea maxLength={100} onChange={(e) => setTextLength(e?.target?.value?.length)} />
        </div>
    )
}