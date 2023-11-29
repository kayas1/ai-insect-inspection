import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/insectInfo.module.css";
import defaultImg from "../tempFile/Helicoverpa_assulta_byNCPMS.JPG";
import testImg1 from "../tempFile/logo192.png";
import testImg2 from "../tempFile/logo512.png";
import { useState } from "react";

function MainBlock({ insectInfo }) {
  const imgs = [defaultImg, testImg1, testImg2];
  const [imgUrl, setImgUrl] = useState(imgs[2]);
  function onClick(e) {
    e.preventDefault();
    setImgUrl(imgs[e.target.value]);
  }
  return (
    <div className={styles.main__container}>
      <div className={styles.imgs__container}>
        <div className={styles.element__imgBlock}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.btnsContainer}>
          <button value={0} onClick={onClick}>
            알
          </button>
          <button value={1} onClick={onClick}>
            유충
          </button>
          <button value={2} onClick={onClick}>
            성충
          </button>
        </div>
      </div>
      <div className={styles.main__information}>
        <p>{insectInfo}</p>
      </div>
    </div>
  );
}

function InsectInfo() {
  return (
    <div>
      {/* title 내용 검출 해충명 */}
      <Header title="검거세미나방" />
      <MainBlock
        insectInfo="몸길이 약 20 mm, 날개를 편 길이는 약 47 mm이며, 몸빛깔은 짙은
          회색이다. 알은 반구형에 가깝고 겉에 방사상 무늬가 있다. 유충은 처음에
          녹색이나, 자라면서 갈색을 띤다. 번데기는 길이가 약 20 mm이고 갈색이다.
          연 2∼3회 발생하며, 유충으로 월동한다. 발생은 규칙적이 아니며
          월동유충의 크기도 다르다. 이듬해 봄에 번데기가 되고 성충이 가장 많이
          나타나는 시기는 6월과 8∼9월이다. 알은 기주(寄主)의 줄기와 잎에 1∼2개씩
          낳는데, 한 마리가 200∼450개를 낳는다. 유충은 어린 작물의 지상부의 뿌리
          근처를 잘라 땅속으로 끌어들이는데, 늦은 봄에서 초여름에 걸쳐 특히 감자
          ·토마토 ·고추 ·담배 등에 피해가 심하다. 한국 ·일본 ·중국 ·시베리아
          ·호주 ·아프리카 ·미국 ·유럽 등 세계 각국에 분포한다. [네이버 지식백과]
          검거세미나방 (두산백과 두피디아, 두산백과)"
      />
      <Footer />
    </div>
  );
}

export default InsectInfo;
