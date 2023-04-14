import { FolderAddOutlined } from "@ant-design/icons";
import { CustomInput } from "..";
import "./ListStockDescription.css";

export default function ListStockDescription() {
    return (
        <div id="stock-description">
            <h3>Description</h3>
            <div className="description-wrapper">
                <h5>Product name</h5>
                <CustomInput
                    type="text"
                />
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "2em"}}>
                    <h5>Product Description</h5>
                    <span>
                        <FolderAddOutlined />
                        <span>Upload .txt file</span>
                    </span>
                </div>

                <CustomInput
                    type="textarea"
                />
            </div>
        </div>
    )
}