import { device } from "../../constants";
import CustomInput from "../CustomInput";
import styled from "styled-components";
import { ModalContextType } from "../../@types/modal";
import { useModalContext } from "../../contexts/ModalContext";


export default function PropertyDetails(): JSX.Element {
    const { changeModalType } = useModalContext() as ModalContextType;

    return (
        <Wrapper>
            <div>
                <h3>Key Details</h3>
                <div className="key-details">
                    <div>
                        <Field>
                            <h5>Minimum Invest Amount</h5>
                            <CustomInput
                                type="text"
                                lefticon={<span className="left">&#8358;</span>}
                            />
                        </Field>

                        <Field>
                            <h5>Return Rate</h5>
                            <CustomInput
                                type="text"
                                rightText={<span className="right-text">%</span>}
                            />
                        </Field>

                        <Field>
                            <h5>Return For</h5>
                            <CustomInput
                                type="select"
                                options={["Lifetime"]}
                            />
                        </Field>

                    </div>
                    <div>

                        <Field>
                            <h5>Maximum Invest Amount</h5>
                            <CustomInput
                                type="text"
                                lefticon={<span className="left">&#8358;</span>}
                            />
                        </Field>

                        <Field>
                            <h5>Target Duration</h5>
                            <CustomInput
                                type="select"
                                options={["Year"]}
                            />
                        </Field>

                        <Field>
                            <h5>Capital Back</h5>
                            <CustomInput
                                type="select"
                                options={['yes', 'no']}
                            />
                        </Field>

                    </div>
                </div>
            </div>
            <div>
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
            </div>
            <Button className="button filled_btn" onClick={() => changeModalType("invest")}>Invest Now</Button>
        </Wrapper>
    )
};


const Wrapper = styled.div`
    margin: 2.5em 0;

    .key-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20px;
        flex-wrap: wrap;
        border-radius: 5px;
        width: 100%;

        span div {
            margin: 0;
            width: 11em;
            margin-bottom: 1em;
        }

    }
             
    .other-details {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
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

const Field = styled.span`

`;

const Button = styled.button`
    margin: 1em auto;
    text-transform: capitalize;
    width: 20em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    font-size: 14px;

    @media ${device.mobileM} {
        width: 85%;
    }
`;