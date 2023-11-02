import { Link } from "react-router-dom";
import mainStyles from "../styles/Main.module.css";
import componentsStyles from "../styles/components.module.css"
import Header from "../component/Header";
import Footer from "../component/Footer";

function Main(){
    return (
        <div className={componentsStyles.main__block}>
            <div className={componentsStyles.main__btnsContainer}>
            <Link className={componentsStyles.btnContainer} to={`/diagnosis`}>
            <button className={componentsStyles.main__btn}>해충 진단</button></Link>
            <Link className={componentsStyles.btnContainer} to={`/community`}>
            <button className={componentsStyles.main__btn}>커뮤니티</button></Link>
            <Link className={componentsStyles.btnContainer} to={`/`}>
            <button className={componentsStyles.main__btn}>내 주변 해충 정보</button></Link>
            </div>
            <div className={componentsStyles.tutorial__vidContainer}>
            <video controls className={componentsStyles.tutorial__vid} src={null}/></div>
        </div>
    );
}

function Home(){
    return (
    <div>
        <Header title="AI 해충 진단 시스템"/>
        <Main/>
        <Footer/>
    </div>)
};

export default Home;