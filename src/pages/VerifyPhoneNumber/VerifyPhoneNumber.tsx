import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./VerifyPhoneNumber.css";
import { Building } from "../../components";

const VerifyPhoneNumber = (): JSX.Element => {
    const [code, setCode] = useState<string[]>([]);
    const navigate = useNavigate();
    const location = useLocation().search;
    const searchParams = new URLSearchParams(location)
    const phoneNumber = searchParams.get("phoneNumber");

    const [disable, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(false);
    }, [code.length === 4]);

    const censorText = (text: string | null) => {
        if (text) {
            if (text === phoneNumber) {
                var result = "";
                for (var i = 0; i < 4; i++) result += "*"; return phoneNumber.slice(0, 7) + result;
            } else {
                return;
            }
        }
    }

    const verifyCode = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // console.log(code)
        // send code to backend
        // reroute to login
        navigate("/details")

    }

    return (
        <div id="registerpage" className="pagewrapper">
            <Building />

            <div className="page">
                <div>
                    <h2 className="heading">OTP verificaion</h2>
                    <p>Check your inbox. We've sent you the code
                        at {censorText(phoneNumber)}
                    </p>
                    <form onSubmit={(e) => { verifyCode(e) }}>
                        <div className="code">
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[0] = e.target.value; setCode(code); }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[1] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[2] = e.target.value; setCode(code) }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[3] = e.target.value; setCode(code) }} />

                        </div>
                        <span className="request">Didn't receive any code?
                            <Link className="link" to='/'>  Request again</Link>
                        </span><br />
                        <button style={{ marginTop: "1em" }} disabled={disable}
                            type="submit" className='button filled_btn'>Verify</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default VerifyPhoneNumber;