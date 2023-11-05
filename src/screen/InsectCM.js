import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/insectCM.module.css";

function MainBlock() {
  return (
    <div className={styles.main__block}>
      <p>asdfkljaskjdhlkjfawlejfaksdf</p>
    </div>
  );
}

function InsectCM() {
  return (
    <div>
      <Header title="검거세미나방 방제법" />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default InsectCM;
