import CustomInput from "../CustomInput";
import styled from "styled-components";


export default function ListStockDetails(): JSX.Element {
    return (
        <Wrapper>
            <KeyDetails />
            <OtherDetails />
        </Wrapper>
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
};

const Wrapper = styled.div`
    margin: 2.5em 0;

    .key-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid #ddd;
        padding: 20px;
        flex-wrap: wrap;
        border-radius: 5px;

        span div {
            margin: 0;
            width: 11em;
            margin-bottom: 1em;
        }
    }
             
    .other-details {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        flex-wrap: wrap;
        border-radius: 5px;

        div div {
            margin: 0;
            width: 9em;
        }

        div {
            margin: 1em 0;
        }
    }

    h5 {
        font-size: 14px;
        font-weight: 600;
        color: ${props => props.theme.black};
    }
`;