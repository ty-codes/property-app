import { themes } from "../../constants";
import "./Themes.css";

export default function Themes() {
    return (
        <div className="outlet">
            <div className="themes-header">
                <h1>Featured Themes</h1>
                <p>Check out these categories to discover new stocks</p>
            </div>
            <div className="themes">
                {
                    themes?.map((theme, key) => (
                        <div className="theme" style={{ backgroundColor: `${theme.background}` }} >
                            <span>
                                <img src={theme.image} alt="pig" />
                            </span>
                            <div>
                                <a href={`theme/${key}`}>{theme.header}</a>
                                <p>{theme.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}