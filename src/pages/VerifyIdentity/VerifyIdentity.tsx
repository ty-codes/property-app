import { useState } from "react";
import { IdVerification, SuccessMessage, SubmitDocument, PhotoInstructions, UploadImage } from "../../components";
import "./VerifyIdentity.css";
import { Logo } from "../../assets/svg";


export default function VerifyIdentity(): JSX.Element {
    

  const [step, setStep] = useState<number>(0);
  const [, setDocumentType] = useState("");

  function renderPage() {
		switch (step) {
			case 0:
				return <IdVerification setStep={setStep} />;
			case 1:
				return <SubmitDocument setStep={setStep} setDocumentType={setDocumentType} />;
			case 2:
				return <PhotoInstructions setStep={setStep} />;
			case 3:
				return <UploadImage setStep={setStep} />;
			case 4:
				return <SuccessMessage />;
			default:
				return <IdVerification setStep={setStep} />;
		}
	}
   
    return (
      <div className="id-wrapper">
        <div className="logo-wrap">
        <Logo />
        <span>Property</span>
        </div>
        {renderPage()}
      </div>
    )
}
