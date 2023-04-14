import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Building } from "../../components";
import "./VerifyEmail.css";

const VerifyEmail = (): JSX.Element => {
    const [code, setCode] = useState<string[]>([]);
    const navigate = useNavigate();
    const location = useLocation().search;
    const searchParams = new URLSearchParams(location)
    const email = searchParams.get("email")
    const [disable, setDisabled] = useState(true);

    console.log(email);

    useEffect(() => {
        setDisabled(false);
    }, [code.length === 4]);

    const censorText = (text: string | null) => {
        if (text) {
            if (text === email) {
                var userName = "";
                var domainName = "";
                var split = text.split('@');

                for (var u = 0; u < split[0].length; u++) {
                    userName += "*";
                }
                for (var d = 0; d < split[0].length; d++) {
                    domainName += "*";
                }
                return userName + '@' + domainName;
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
        navigate("/signin")

    }

    return (
        <div id="registerpage" className="pagewrapper">
            <Building />

            <div className="page">
                <div>
                    <h2 className="heading">Verify Email</h2>
                    <p className="subtitle">For security, please enter the code that
                        we've sent to {censorText(email)}
                    </p>
                    <form onSubmit={(e) => { verifyCode(e) }}>
                        <div className="code">
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[0] = e.target.value; setCode(code); console.log(code, code.length) }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[1] = e.target.value; setCode(code); console.log(code, code.length) }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[2] = e.target.value; setCode(code); console.log(code, code.length) }} />
                            <input type='text' maxLength={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { code[3] = e.target.value; setCode(code); console.log(code, code.length) }} />

                        </div>
                        <h6 className="request">
                            Didn't receive any code?<Link className="link" to='/'>  Request again</Link>
                        </h6><br />


                        <button style={{ marginTop: "1em" }} disabled={disable} type="submit" className='button filled_btn'>Verify</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default VerifyEmail;