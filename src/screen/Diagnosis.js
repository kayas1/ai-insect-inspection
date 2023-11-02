import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/diagnosis.module.css";

function handleSubmit(event){
    event.preventDefault();
};

function SubmitForm(){
    return <form className={styles.submitForm}>
        <div className={styles.selectContainer}>
        </div>
        <input className={styles.submitFile} type="file" accept="image/jpeg"></input>
        <input className={styles.submitBtn} type="submit" onClick={handleSubmit}></input>
    </form>
};

function DiagnosisScreen(){
    return <div>
        <Header title="이미지를 선택해주세요!"/>
        <SubmitForm/>
        <Footer/>
    </div>;
};

export default DiagnosisScreen;