import { useState } from "react";
import { EmploymentStatus, MaritalStatus, Nationality, Address, FinancialStatus, InvestmentStatus, } from "../../components";
import "./Onboarding.css";
import { Logo } from "../../assets/svg";


export default function Onboarding(): JSX.Element {
  const [step, setStep] = useState<number>(0);

  function renderPage() {
		switch (step) {
			case 0:
				return <Nationality setStep={setStep} />;
			case 1:
				return <MaritalStatus setStep={setStep} />;
			case 2:
				return <EmploymentStatus  setStep={setStep} />;
			case 3:
				return <Address setStep={setStep} />;
			case 4:
				return <FinancialStatus setStep={setStep} />;
            case 5:
				return <InvestmentStatus />;
			default:
				return <Nationality setStep={setStep} />;
		}
	}
   
    return (
      <div className="onboarding-wrapper">
        <div className="logo-wrap">
        <Logo />
        <span>Property</span>
        </div>
        {renderPage()}
      </div>
    )
}
