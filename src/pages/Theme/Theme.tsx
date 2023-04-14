import "./Theme.css";
import { themes } from "../../constants";
import { useParams } from "react-router-dom";
import { dangote, fbn, gtb, oando } from "../../assets";
import { Stock } from "../../components";
import { array } from "yup";

export default function Theme() {
    const slug = useParams();
    const currentTheme = slug?.id && themes[Number(slug.id)];

    const placeholder = [
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },
        {
            image: gtb,
            name: "GTCO",
            website: "gtbank.com",
            price: "600"
        },
        {
            image: oando,
            name: "oando",
            website: "oandoplc.com",
            price: "600"
        },
        {
            image: dangote,
            name: "dangote",
            website: "dangote.com",
            price: "600"
        },
        {
            image: fbn,
            name: "first bank",
            website: "firstbankofnigeria.com",
            price: "600"
        },

    ]
    var stock = {
        image: fbn,
        name: "first bank",
        website: "firstbankofnigeria.com",
        price: "600"
    }
    return (
        <div className="outlet">
                {currentTheme && (
                    <div className="theme-header" style={{backgroundColor: `${currentTheme?.background || "#1363ff"}`}}>

                        <img src={currentTheme?.image} alt="theme" />
                        <div>
                            <h1>{currentTheme?.header}</h1>
                            <p>{currentTheme?.text}</p>
                        </div>
                  </div>   
                )}
           
            <div className="themes">
                {Array(40).fill("").map((i) => (      
                    <>
                    <Stock stock={stock} />
                    </>
                    
                ))}
            </div>

        </div>
    )
}