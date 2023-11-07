import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./screen/Main.js";
import ResultScreen from "./screen/Result.js";
import DiagnosisScreen from "./screen/Diagnosis.js";
import CommunityScreen from "./screen/Community.js";
import NotificationScreen from "./screen/Notification.js";
import InsectInfo from "./screen/InsecInfo.js";
import InsectCM from "./screen/InsectCM.js";
import InsectAroundMe from "./screen/InsectAroundMe.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notificaiton" element={<NotificationScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/diagnosis" element={<DiagnosisScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/insectinfo" element={<InsectInfo />} />
        <Route path="/insectcm" element={<InsectCM />} />
        <Route path="/insectaroundme" element={<InsectAroundMe />} />
      </Routes>
    </Router>
  );
}

export default App;
