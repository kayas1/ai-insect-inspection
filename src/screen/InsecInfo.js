import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/insectInfo.module.css";
import imgUrl from "../tempFile/Helicoverpa_assulta_byNCPMS.JPG";

function MainBlock() {
  return (
    <div className={styles.main__container}>
      <div className={styles.imgs__container}>
        <div className={styles.element__imgBlock}>
          <img src={imgUrl} />
          <h3 className={styles.img__name}>알</h3>
        </div>
        <div className={styles.element__imgBlock}>
          <img src={imgUrl} />
          <h3 className={styles.img__name}>유충</h3>
        </div>
        <div className={styles.element__imgBlock}>
          <img src={imgUrl} />
          <h3 className={styles.img__name}>성충</h3>
        </div>
      </div>
      <p className={styles.main__information}>
        검거세미나방은 ~~~~~~~~~~~~~~~~~~~~
      </p>
    </div>
  );
}

function InsectInfo() {
  return (
    <div>
      <Header title="검거세미나방" />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default InsectInfo;
