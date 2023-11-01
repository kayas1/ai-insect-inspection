import { Link } from "react-router-dom";
import mainStyles from "../styles/Main.module.css";
import componentsStyles from "../styles/components.module.css"
import Header from "../component/Header";
import Footer from "../component/Footer";

function Notification(){
    return(<Link to={`/notification`}>
        <h1 className={mainStyles.text__align}>Notification</h1></Link>
    );
};

function Main(){
    return (
        <div className={componentsStyles.main__block}>
            <div className={componentsStyles.main__btnsContainer}>
            <Link className={componentsStyles.btnContainer} to={`/diagnosis`}>
            <button className={componentsStyles.main__btn}>Insect Inspection</button></Link>
            <Link className={componentsStyles.btnContainer} to={`/community`}>
            <button className={componentsStyles.main__btn}>Community</button></Link>
            <Link className={componentsStyles.btnContainer} to={`/`}>
            <button className={componentsStyles.main__btn}>Insect around me</button></Link>
            </div>
            <div className={componentsStyles.tutorial__vidContainer}>
            <video controls className={componentsStyles.tutorial__vid} src={null}/></div>
        </div>
    );
}

function Home(){
    return (
    <div>
        <Header title="AI Inspection System"/>
        <Notification/>
        <Main/>
        <Footer/>
    </div>)
};

export default Home;