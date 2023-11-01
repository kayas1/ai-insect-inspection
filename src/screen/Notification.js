import Header from "../component/Header";

function Context(){
    return(
        <div>
            <h3>title</h3>
            <p>asdklfjwekjhlfkjsahlkfh</p>
        </div>
    );
};

function NotificationScreen(){
    return (
        <div>
            <Header title="작물의 종류와 이미지를 선택해주세요!"/>
            <Context/>
        </div>
    );
};

export default NotificationScreen;