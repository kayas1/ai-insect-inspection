import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/insectCM.module.css";

function MainBlock({ controlMethod }) {
  return (
    <div className={styles.main__block}>
      <p>{controlMethod}</p>
    </div>
  );
}

function InsectCM() {
  return (
    <div>
      <Header title="검거세미나방 방제법" />
      {/* controlMethod에 방제법 내용 제시*/}
      <MainBlock controlMethod="asdfqwecfasdfhclkashdf" />
      <Footer />
    </div>
  );
}

export default InsectCM;
