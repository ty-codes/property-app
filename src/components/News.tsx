import styled from "styled-components";
import { device } from "../constants";


export default function News(): JSX.Element {
    const placeholder = [{
        date: new Date(),
        title: "Stock market trades bullish as investors gain new  ",
        publisher: "Guardian"
    },
    {
        date: new Date(),
        title: "Stock market trades bullish as investors gain new ",
        publisher: "Guardian"
    },
    {
        date: new Date(),
        title: "Stock market trades bullish as investors gain new ",
        publisher: "Guardian"
    },
    {
        date: new Date(),
        title: "Stock market trades bullish as investors gain new ",
        publisher: "Guardian"
    },
    ]
    return (
        <Wrapper>
            <h2>Recent News</h2>
            {/* use news api */}
            <div>
                {placeholder.map((item, key) => (
                    <div className="unit" key={`news-${key}`}>
                        <span className="news-image"></span>
                        <div style={{width: "70%"}}>
                            <p className="date">{item.date.toDateString()}</p>
                            <p className="title">{item.title}</p>
                            <p className="publisher">{item.publisher}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin: 2em 0;
    width: 40%;

    @media ${device.isSmallDevice} {
        width: 100%;
    }

    h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        text-align: left;
        text-transform: capitalize;
        color: #263238;
        margin-bottom: 1em;
    }

    .unit {
        display: flex;
        flex-direction: row;
        margin-bottom: 1em;
        justify-content: first baseline;
        text-align: left;
        padding: 10px;

        p {
            margin: 0.5em 0;
        }

        span {
        width: 100px;
        height: 70px;
        background-color: #ccc;
        border-radius: 5px;
        margin-right: 10px;
        }

        .date {
        font-size: 0.6em;
        color: #bbb;
        text-align: left;
        font-weight: 600;
        }

        .title {
            font-size: 0.9em;
            color: #464646;
            text-align: left;
            font-weight: 900;
            overflow: hidden;
            text-overflow: ellipsis;
            /* width: ; */
        }

        .publisher {
            font-size: 0.6em;
            color: #1363ff;
            text-align: left;
            font-weight: 700;
        }
    }

`