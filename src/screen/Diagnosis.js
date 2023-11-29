import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/diagnosis.module.css";
import { useEffect, useRef, useState } from "react";

function handleSubmit(event) {
  event.preventDefault();
  const a = document.createElement("a");
  a.href = "/result";
  document.body.appendChild(a);
  a.click();
}

function SubmitForm() {
  const [isHidden, setIsHidden] = useState(false);
  const [changeCamera, setChangeCamera] = useState(false);
  const CameraComponent = () => {
    const videoRef = useRef(null);
    const startCamera = (e) => {
      e.preventDefault();
      setIsHidden((current) => !current);
      setChangeCamera((current) => !current);
    };
    useEffect(() => {
      console.log(videoRef);
      if (changeCamera === true && videoRef.current) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
          })
          .catch((error) => {
            console.error("Error accessing media devices:", error);
          });
      } else {
        videoRef.current.srcObject = null;
      }
    }, [changeCamera]);

    const capturePhoto = (e) => {
      e.preventDefault();
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const photoURL = canvas.toDataURL("image/jpeg");
      const a = document.createElement("a");
      a.href = photoURL;
      a.download = "test.jpeg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setIsHidden((current) => !current);
      setChangeCamera((current) => !current);

      // photoURL을 사용하여 필요한 처리를 수행하거나, 상태에 저장하거나 등등.
    };

    return (
      <div
        className={
          changeCamera ? styles.changedCameraContainer : styles.cameraContainer
        }
      >
        {changeCamera ? (
          <button onClick={capturePhoto} className={styles.cameraBtn}>
            사진 촬영
          </button>
        ) : (
          <button
            onClick={startCamera}
            className={`${styles.cameraBtn} ${styles.hidedCameraBtn}`}
          >
            카메라 열기
          </button>
        )}
        <video
          ref={videoRef}
          autoPlay
          className={changeCamera ? styles.captureVideo : styles.hideCamera}
        />
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.submitForm}>
        {changeCamera ? null : (
          <div className={styles.explainContainer}>
            <h1>
              이미지파일을 선택하시거나 <br />
              카메라 열기를 눌러 사진 촬영 후 선택하여 <br />
              작물 종류를 선택하고 제출해주세요
            </h1>
          </div>
        )}
        <CameraComponent />
        {isHidden ? null : (
          <div className={styles.submitFileContainer}>
            <input
              id="selectFileBtn"
              className={styles.submitFile}
              type="file"
              accept="image/jpeg"
              name="imageFile"
            ></input>
          </div>
        )}
        {isHidden ? null : (
          <div className={styles.selectContainer}>
            <div>
              <label htmlFor="agricultureValue">작물 종류 </label>
              <select id="agricultureValue" name="kindOf">
                <option value={0}>감자</option>
                <option value={1}>고추</option>
                <option value={2}>배추</option>
                <option value={3}>벼</option>
                <option value={4}>콩</option>
                <option value={5}>파</option>
              </select>
            </div>
          </div>
        )}
        {isHidden ? null : (
          <div className={`${styles.submitBtnContainer} submitBtnContainer`}>
            <input
              className={styles.submitBtn}
              type="submit"
              onClick={handleSubmit}
            ></input>
          </div>
        )}
      </form>
    </div>
  );
}

function DiagnosisScreen() {
  return (
    <div>
      <Header title="진단" />

      <SubmitForm />
      <Footer />
    </div>
  );
}

export default DiagnosisScreen;
