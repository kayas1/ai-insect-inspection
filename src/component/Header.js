
import { Link } from "react-router-dom";
import componentsStyles from "../styles/components.module.css"

function Header({title}){
    return (
    <div className={componentsStyles.navigate}><Link to={`/`}><span className={componentsStyles.home}>Home</span></Link>
    <h1 className={componentsStyles.title}>{title}</h1>
    </div>
    );
};

export default Header;
