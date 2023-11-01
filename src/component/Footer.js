
import styles from "../styles/footer.module.css";

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.tempContainer}>
            <span className={styles.number}>phone number : 010-1234-5678</span>
            </div>
            <div className={styles.tempContainer}>
            <button className={styles.footer__btn}>user help</button>
            </div>
        </div>
    );
};

export default Footer;