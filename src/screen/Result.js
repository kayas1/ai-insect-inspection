import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/result.module.css";
import baseStyles from "../styles/Main.module.css";
import resultImg from "../tempFile/Helicoverpa_assulta_byNCPMS.JPG";
import resultChart from "../tempFile/result.jpg";
import { Link } from "react-router-dom";

function MainBlock(){
    return(
        <div className={styles.mainContainer}>
            <img className={styles.resultImg} src={resultImg} alt=""/>
            <img className={styles.resultImg} src={resultChart} alt=""/>
            <div className={styles.btnsContainer}><Link to="/insectinfo">
            <button className={styles.moreInfoBtn}>Information about insect</button>
            </Link>
            <Link to="/insectcm">
            <button className={styles.moreInfoBtn}>Insect control method</button>
            </Link>
            </div>
        </div>
    );
};

function ResultScreen(){
    return(
        <div>
            <Header title="Moss : 92%"/>
            <MainBlock/>
            <Footer/>
        </div>
    );
};

export default ResultScreen;