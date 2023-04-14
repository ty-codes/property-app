import { ScheduleOutlined, ShareAltOutlined } from "@ant-design/icons";
import { ListStockImages, ListStockDocuments, ListStockDetails, ListStockDescription, ListStockCategory, ListStockReview } from "..";
import "./ListStock.css";


export default function ListStock() {
    return (
        <div>
            <h1 className="list-heading" >Add/List Stocks</h1>

            <div id="list-stock">

                <section className="section">
                    <ListStockDescription />
                    <ListStockCategory />
                    <ListStockDocuments />
                </section>

                <section className="section">
                    <ListStockImages />
                    <ListStockDetails />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="filled"  ><ScheduleOutlined />Schedule date</button>
                        <button className="outlined"><ShareAltOutlined />Share</button>
                    </div>

                    <br />
                    <ListStockReview />
                </section>
            </div>
            <span className="list-button-wrap" >
                <button className="list-button"  >List Property</button>
            </span>

        </div>

    )
};
