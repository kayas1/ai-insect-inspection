import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/result.module.css";
import resultImg from "../tempFile/Helicoverpa_assulta_byNCPMS.JPG";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          "검거세미밤나방",
          "담배거세미나방",
          "담배나방",
          "도둑나방",
          "기타",
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
      series: [92, 3, 3, 1, 1],
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
              ? "400"
              : window.innerWidth < 1280
              ? "450"
              : "600"
          }
        />
      </div>
    );
  }
}

function MainBlock() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.resultImg} src={resultImg} alt="" />
      </div>
      <Donut width="600" className={styles.chart} />
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
