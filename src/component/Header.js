
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

function Header({title}){
    return (
    <div className={styles.navigate}>
        <Link className={styles.home__anchor} to={`/`}>
            <i className="fa-solid fa-house fa-2xl"/>
        </Link>
    <h1 className={styles.title}>{title}</h1>
    </div>
    );
};

export default Header;
