import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/diagnosis.module.css";

function handleSubmit(event){
    event.preventDefault();
};

function SubmitForm(){
    return <form className={styles.submitForm}>
        <div className={styles.selectContainer}>
        <label className={styles.selectLabel} for="id">crop</label>
        <select className={styles.submitSelect} id="kind">
            <option value={0}>chili</option>
            <option value={1}>rice</option>
            <option value={2}>감자</option>
            <option value={3}>콩</option>
            <option value={4}>파</option>
            <option value={5}>배추</option>
        </select>
        </div>
        <input className={styles.submitFile} type="file" accept="image/jpeg"></input>
        <input className={styles.submitBtn} type="submit" onClick={handleSubmit}></input>
    </form>
};

function DiagnosisScreen(){
    return <div>
        <Header title="Select the kind of crop and image!"/>
        <SubmitForm/>
        <Footer/>
    </div>;
};

export default DiagnosisScreen;