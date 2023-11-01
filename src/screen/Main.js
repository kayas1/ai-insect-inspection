import { Link } from "react-router-dom";
import mainStyles from "../styles/Main.module.css";
import componentsStyles from "../styles/components.module.css"
import Header from "../component/Header";

function Notification(){
    return(<Link to={`/notification`}>
        <h1 className={mainStyles.text__align}>Notification</h1></Link>
    );
};

function Main(){
    return (
        <div><Link to={`/diagnosis`}>
            <button>Insect Inspection</button></Link>
            <Link to={`/community`}>
            <button>Community</button></Link>
            <video src={null}/>
        </div>
    );
}

function Home(){
    return (
    <div>
        <Header title="AI Inspection System"/>
        <Notification/>
        <Main/>
        <div></div>
    </div>)
};

export default Home;