import Footer from "../component/Footer";
import Header from "../component/Header";

import styles from "../styles/community-post-form.module.css";

function Form() {
  return (
    <div>
      <form
        className={styles.form__container}
        action="/community_post/create"
        method="post"
      >
        <div className={styles.form__title}>
          <div>
            <label for="subject">제목</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div>
            <label for="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
        </div>
        <textarea
          className={styles.form__textarea}
          name="content"
          id="content"
        />
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

function Community_post_edit() {
  return (
    <div>
      <Header title="글 등록" />
      <Form />
      <Footer />
    </div>
  );
}

export default Community_post_edit;
