import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/community-context.module.css";

function Title() {
  // document.getElementById("edit").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   document.getElementById("buttonForm").setAttribute("method", "GET");
  //   document
  //     .getElementById("buttonForm")
  //     .setAttribute("action", `/community_post/edit/${Community_post.id}|`);
  //   document.getElementById("buttonForm").submit();
  // });
  // document.getElementById("delete").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   document.getElementById("buttonForm").setAttribute("method", "POST");
  //   document
  //     .getElementById("buttonForm")
  //     .setAttribute("action", `/community_post/delete/${Community_post.id}`);
  //   document.getElementById("buttonForm").submit();
  // });
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleDiv}>
        <div>sample Title</div>
      </div>
      <div className={styles.noneTitleDiv}>
        <div>
          <div>n월 n일 00:00:00</div>
        </div>
        <form id="buttonForm">
          <input
            name="password"
            id="password"
            type="password"
            required
            placeholder="비밀번호를 입력하세요"
          />

          <input type="submit" value="편집" id="edit" />
          <input type="submit" value="게시글 삭제" id="delete" />
        </form>
      </div>
    </div>
  );
}

function Context() {
  return (
    <div className={styles.contextContainer}>
      <p>
        ㅁㅈ도치ㅏㄴㅁ츠ㅏ럼ㅈㄷ추리ㅏㅁㅈㄷㄹasdfaefasdfaewfvawefvasdvasdfasdvfaㅊ
      </p>
    </div>
  );
}

function CommentItem({ text, createDate }) {
  return (
    <li className={styles.commentContainer}>
      <div>{text}</div>
      <div>
        <div>{createDate} </div>
        <form>
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <button>X</button>
        </form>
      </div>
    </li>
  );
}

function Comment() {
  return (
    <div>
      <ul>
        <CommentItem text="asdf" createDate="n월 n일 00:00:00" />
        <CommentItem text="asdf" createDate="n월 n일 00:00:00" />
        <CommentItem text="asdf" createDate="n월 n일 00:00:00" />
      </ul>
      <div className={styles.addCommentContainer}>
        <form>
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <textarea placeholder="댓글을 입력하세요" />
          <button>등록</button>
        </form>
      </div>
    </div>
  );
}

function CommunityContext() {
  return (
    <div>
      <Header title="커뮤니티" />
      <div className={styles.mainContainer}>
        <Title />
        <hr />
        <Context />
        <hr />
        <Comment />
      </div>
      <Footer />
    </div>
  );
}

export default CommunityContext;
