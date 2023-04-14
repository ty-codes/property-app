import "./Logo.css";
import { Logo as LogoIcon } from "../../assets/svg";

export default function Logo() {
    return (
    <div className="logo-wrap">
            <LogoIcon />
            <span>Property</span>
      </div>
    )
}