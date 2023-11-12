import Footer from "../component/Footer";
import Header from "../component/Header";

import "../styles/styles.css";
import styles from "../styles/community-post-form.module.css";

function Form() {
  return (
    <div>
      <form className={styles.form__container}>
        <div className={styles.form__title}>
          <div>
            <label for="title">제목</label>
            <input type="text" id="title" />
          </div>
          <div>
            <label for="password">비밀번호</label>
            <input type="password" id="password" />
          </div>
        </div>
        <textarea className={styles.form__textarea} />
        <div className={styles.form__submitDiv}>
          <input
            className={styles.form__submit}
            type="submit"
            value="등록하기"
          />
        </div>
      </form>
    </div>
  );
}

function Community_post_form() {
  return (
    <div>
      <Header title="글 등록" />
      <Form />
      <Footer />
    </div>
  );
}

export default Community_post_form;
