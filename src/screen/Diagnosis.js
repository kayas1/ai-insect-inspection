import Header from "../component/Header";

function handleSubmit(event){
    event.preventDefault();
};

function SubmitForm(){
    return <form>
        <select id="kind">
            <option value={0}>����</option>
            <option value={1}>��</option>
            <option value={2}>����</option>
            <option value={3}>��</option>
            <option value={4}>��</option>
            <option value={5}>����</option>
        </select>
        <input type="file" accept="image/jpeg"></input>
        <input type="submit" onClick={handleSubmit}></input>
    </form>
};

function DiagnosisScreen(){
    return <div>
        <Header title="�۹��� �̹����� �������ּ���!"/>
        <SubmitForm/>
    </div>;
};

export default DiagnosisScreen;