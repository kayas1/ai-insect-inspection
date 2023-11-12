import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from "../styles/insectAroundme.module.css";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";
import { useState } from "react";
import { useEffect } from "react";

function MyMap() {
  const [lat, setLat] = useState(37.5);
  const [lng, setLng] = useState(127.07);
  const navermaps = useNavermaps();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      console.log(lat, " ", lng);
    }, console.log("adsf"));
  });

  return (
    <NaverMap defaultCenter={new navermaps.LatLng(lat, lng)} defaultZoom={15}>
      <Marker position={new navermaps.LatLng(lat, lng)} />
      <Marker position={new navermaps.LatLng(37.55, 127.07)} />
    </NaverMap>
  );
}
function Map() {
  const apikey = process.env.REACT_APP_MAP_CLIENT_ID;

  return (
    <div className={styles.map__loader}>
      <div className="map">
        <NavermapsProvider ncpClientId={apikey}>
          <MapDiv
            style={{
              width: "100%",
              height: window.innerWidth < 768 ? "80vh" : "70vh",
            }}
          >
            <MyMap />
          </MapDiv>
        </NavermapsProvider>
      </div>
    </div>
  );
}

function InsectAroundMe() {
  return (
    <div>
      <Header title="주변 해충 정보" />
      <Map />
      <Footer />
    </div>
  );
}

export default InsectAroundMe;
