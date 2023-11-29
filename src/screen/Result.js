import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/result.module.css";
import resultImg from "../tempFile/Helicoverpa_assulta_byNCPMS.JPG";
import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          props.label1,
          props.label2,
          props.label3,
          props.label4,
          props.label5,
        ],
        dataLabels: { style: { fontSize: "20px" } },
        legend: {
          fontSize:
            window.innerWidth < 768
              ? "16px"
              : window.innerWidth < 1280
              ? "20px"
              : "24px",
          horizontalAlign: "center",
          position: "right",
        },
      },
      series: [
        Number(props.percent1),
        Number(props.percent2),
        Number(props.percent3),
        Number(props.percent4),
        Number(props.percent5),
      ],
    };
  }
  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={
            window.innerWidth < 768
              ? "450"
              : window.innerWidth < 1280
              ? "525"
              : "600"
          }
        />
      </div>
    );
  }
}

function MainBlock() {
  const [resultData, setResultData] = useState({
    label1: "검거세미밤나방",
    label2: "담배거세미나방",
    label3: "담배나방",
    label4: "도둑나방",
    label5: "기타",
    percent1: 92.5,
    percent2: 3,
    percent3: 2.5,
    percent4: 1,
    percent5: 1,
  });
  useEffect(() => {
    setResultData({
      label1: "기타",
      label2: "담배거세미나방",
      label3: "담배나방",
      label4: "도둑나방",
      label5: "기타",
      percent1: 92.5,
      percent2: 3,
      percent3: 2.5,
      percent4: 1,
      percent5: 1,
    });
    console.log(resultData);
  }, [resultData]);
  console.log(resultData);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.resultImg} src={resultImg} alt="" />
      </div>
      <div className={styles.chartDiv}>
        {/* 진단 결과 관련 정보 확률 높은 순*/}
        <Donut
          width="600"
          className={styles.chart}
          label1={resultData.label1}
          label2={resultData.label2}
          label3={resultData.label3}
          label4={resultData.label4}
          label5={resultData.label5}
          percent1={resultData.percent1}
          percent2={resultData.percent2}
          percent3={resultData.percent3}
          percent4={resultData.percent4}
          percent5={resultData.percent5}
        />
      </div>
      <div className={styles.btnsContainer}>
        <Link to="/insectinfo">
          <button className={styles.moreInfoBtn}>해충 상세 정보</button>
        </Link>
        <Link to="/insectcm">
          <button className={styles.moreInfoBtn}>해충 방제법</button>
        </Link>
      </div>
    </div>
  );
}

function ResultScreen() {
  return (
    <div>
      <Header title="검거세미나방 : 92%" />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default ResultScreen;
