import Header from "../component/Header";
import "../styles/styles.css";

function Context() {
  return (
    <div>
      <h3>title</h3>
      <p>asdklfjwekjhlfkjsahlkfh</p>
    </div>
  );
}

function NotificationScreen() {
  return (
    <div>
      <Header title="�۹��� ������ �̹����� �������ּ���!" />
      <Context />
    </div>
  );
}

export default NotificationScreen;
