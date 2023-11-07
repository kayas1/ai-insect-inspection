import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

function onClick() {
  window.history.back();
}

function Header({ title }) {
  return (
    <div className={styles.navigate}>
      <Link className={styles.home__anchor} to={`/`}>
        <i className="fa-solid fa-house fa-2xl" />
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.back__anchor} onClick={onClick}>
        <i className="fa-solid fa-arrow-left fa-2xl" />
      </div>
    </div>
  );
}

export default Header;
