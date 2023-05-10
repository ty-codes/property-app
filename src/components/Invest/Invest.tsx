import { Checkout, PaymentInformation } from "..";
import { useState } from "react";


export default function Invest() {
    const [step, setStep] = useState<number>(1);

    return (
        <div>
            {step === 1 ?
                <PaymentInformation setStep={setStep} />
                : step === 2 ?
                    <Checkout />
                    : <PaymentInformation setStep={setStep} />
            }

        </div>
    )
};