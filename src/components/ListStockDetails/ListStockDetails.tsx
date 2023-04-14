import CustomInput from "../CustomInput/CustomInput";
import "./ListStockDetails.css";

export default function ListStockDetails(): JSX.Element {
    return (
        <div id="stock-details">
            <KeyDetails />
            <OtherDetails />
        </div>
    )
};

const KeyDetails = (): JSX.Element => {
    return (
        <section>
            <h3>Key Details</h3>
            <div className="key-details">
                <div>
                    <span>
                        <h5>Minimum Invest Amount</h5>
                        <CustomInput
                            type="text"
                            lefticon={<span className="left">&#8358;</span>}
                        />
                    </span>

                    <span>
                        <h5>Return Rate</h5>
                        <CustomInput
                            type="text"
                            rightText={<span className="right-text">%</span>}

                        />
                    </span>

                    <span>
                        <h5>Return For</h5>
                        <CustomInput
                            type="select"
                            options={["Lifetime"]}
                        />
                    </span>

                </div>
                <div>

                    <span>
                        <h5>Maximum Invest Amount</h5>
                        <CustomInput
                            type="text"
                            lefticon={<span className="left">&#8358;</span>}
                        />
                    </span>

                    <span>
                        <h5>Target Duration</h5>
                        <CustomInput
                            type="select"
                            options={["Year"]}
                        />
                    </span>

                    <span>
                        <h5>Capital Back</h5>
                        <CustomInput
                            type="select"
                            options={['yes', 'no']}
                        />
                    </span>

                </div>
            </div>
        </section>

    )
};

const OtherDetails = (): JSX.Element => {
    return (
        <section>
            <h3>Other Details</h3>
            <div className="other-details">
                <div>
                    <h5>Price</h5>
                    <CustomInput
                        type="text"
                        rightText={<span className="right-text">Per Unit</span>}
                    />
                </div>

                <div>
                    <h5>Square Meter</h5>
                    <CustomInput
                        type="text"
                        rightText={<span className="right-text">Sq</span>}

                    />
                </div>

                <div>
                    <h5>Year of Building</h5>
                    <CustomInput
                        type="text"
                    />
                </div>
            </div>
        </section>
    )
}