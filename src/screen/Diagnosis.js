import Footer from "../component/Footer";
import Header from "../component/Header";
import "../styles/styles.css";
import styles from "../styles/diagnosis.module.css";
import { useRef } from "react";

function handleSubmit(event) {
  event.preventDefault();
  const a = document.createElement("a");
  a.href = "/result";
  document.body.appendChild(a);
  a.click();
}

const CameraComponent = () => {
  const videoRef = useRef();
  let photoURL = null;
  const startCamera = (e) => {
    e.preventDefault();
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });
  };

  const capturePhoto = (e) => {
    e.preventDefault();
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    photoURL = canvas.toDataURL("image/jpeg");
    console.log(photoURL);
    // photoURL을 사용하여 필요한 처리를 수행하거나, 상태에 저장하거나 등등.
  };

  return (
    <div>
      <button onClick={startCamera} className={styles.cameraBtn}>
        Start Camera
      </button>
      <video ref={videoRef} autoPlay />
      <button onClick={capturePhoto}>Take Photo</button>
      <img src={photoURL} alt="" />
    </div>
  );
};

function SubmitForm() {
  return (
    <form className={styles.submitForm}>
      <CameraComponent />
      <input
        className={styles.submitFile}
        type="file"
        accept="image/jpeg"
      ></input>
      <input
        className={styles.submitBtn}
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

function DiagnosisScreen() {
  return (
    <div>
      <Header title="이미지를 선택해주세요!" />
      <SubmitForm />
      <Footer />
    </div>
  );
}

export default DiagnosisScreen;
