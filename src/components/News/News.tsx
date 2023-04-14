import "./News.css";

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
        <div className="news">
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
        </div>
    )
}