import "./Categories.css";
import { bank, elysium, pig, metrics, bag } from "../../assets";
import { themes } from "../../constants";

export default function Categories() {
    return (
        <>
            <div className="categories-header">
                <p>Check out these categories to discover new stocks</p>
            </div>
            <div className="categories" >
                {themes.slice(0, 7).map(category => (
                    <div className="category" style={{ backgroundColor: `${category.background}` }} >
                        <span>
                            <img src={category.image} alt="bank" />
                        </span>
                        <div>
                            <h5>{category.header}</h5>
                            <p>{category.text}</p>
                        </div>
                    </div>
                ))}



            </div>
        </>


    )
}