import {Link} from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import "./DataLink.css";

const DataLink = ({text, link, placeholder}: {text:string, link:string, placeholder:string}) => {
    return(
        <div className="datalink" >
            <h2>{text}</h2>
            <Link to={`${link}`}>{placeholder}{" >"} </Link>
        </div>
    )
}

export default DataLink;