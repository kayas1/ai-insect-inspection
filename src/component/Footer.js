
import styles from "../styles/footer.module.css";

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.tempContainer}>
            <span className={styles.number}>전화 : 010-1234-5678</span>
            </div>
            <div className={styles.tempContainer}>
            <button className={styles.footer__btn}>사용자 지원</button>
            </div>
        </div>
    );
};

export default Footer;