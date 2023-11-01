import Header from "../component/Header";

function handleSubmit(event){
    event.preventDefault();
};

function SubmitForm(){
    return <form>
        <select id="kind">
            <option value={0}>고추</option>
            <option value={1}>벼</option>
            <option value={2}>감자</option>
            <option value={3}>콩</option>
            <option value={4}>파</option>
            <option value={5}>배추</option>
        </select>
        <input type="file" accept="image/jpeg"></input>
        <input type="submit" onClick={handleSubmit}></input>
    </form>
};

function DiagnosisScreen(){
    return <div>
        <Header title="작물과 이미지를 선택해주세요!"/>
        <SubmitForm/>
    </div>;
};

export default DiagnosisScreen;