import { Link } from "react-router-dom";
import "../styles/styles.css";
import styles from "../styles/main.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Main() {
  return (
    <div className={styles.main__block}>
      <div className={styles.main__btnsContainer}>
        <div className={styles.btnContainer}>
          <Link className={styles.anchor__conatiner} to={`/diagnosis`}>
            <button className={styles.main__btn}>해충 진단</button>
          </Link>
        </div>
        <div className={styles.btnContainer}>
          <Link className={styles.anchor__conatiner} to={`/community`}>
            <button className={styles.main__btn}>커뮤니티</button>
          </Link>
        </div>
        <div className={styles.btnContainer}>
          <Link className={styles.anchor__conatiner} to={`/`}>
            <button className={styles.main__btn}>내 주변 해충 정보</button>
          </Link>
        </div>
      </div>
      <div className={styles.tutorial__vidContainer}>
        <video controls className={styles.tutorial__vid} src={null} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header title="AI 해충 진단 시스템" />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
