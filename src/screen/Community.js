import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/community.module.css";

function Post(){
    return(
        <div className={styles.postBtnContainer}>
            <button className={styles.postBtn}>post</button>
        </div>
    );
};

function CommunityList(){
    return(
        <ul className={styles.communityContainer} reversed>
            <li className={styles.communityListItem}><span>1.  sample1 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>2.  sample2 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>3.  sample3 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>4.  sample4 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>5.  sample5 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>6.  sample6 title</span><span>sample created date</span></li>
            <hr/>
            <li className={styles.communityListItem}><span>7.  sample7 title</span><span>sample created date</span></li>
        </ul>
    );
};

function CommunityScreen(){
    return(
        <div>
            <Header title="Community"/>
            <Post/>
            <CommunityList/>
            <Footer/>
        </div>
    );
};

export default CommunityScreen;