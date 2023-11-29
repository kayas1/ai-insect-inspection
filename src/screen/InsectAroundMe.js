import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from "../styles/insectAroundme.module.css";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
  InfoWindow,
} from "react-naver-maps";
import { useState } from "react";
import { useEffect } from "react";
function MyMap() {
  const navermaps = useNavermaps();

  const [map, setMap] = useState(null);
  const [infowindow, setInfoWindow] = useState(null);

  const markers = [
    {
      id: 1,
      position: { lat: 37.55, lng: 127.07 },
      insectName: "검거세미밤나방",
      date: "00월 0일",
    },
    {
      id: 2,
      position: { lat: 37.5, lng: 127 },
      insectName: "밤나방",
      date: "00월 0일",
    },
  ];

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return;

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    map.setCenter(location);
    map.setZoom(14);
    infowindow.setContent(
      '<div style="padding:20px;">' +
        "지도상의 표시들을 클릭하여 해충 발생 날짜와 해충명을 알 수 있습니다." +
        "</div>"
    );
    infowindow.open(map, location);
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return;

    const center = map.getCenter();
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        "latitude: " +
        center.lat() +
        "<br />longitude: " +
        center.lng() +
        "</div>"
    );
    infowindow.open(map, center);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      const center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }

  useEffect(() => {
    if (!map || !infowindow) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      var center = map.getCenter();
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      );
      infowindow.open(map, center);
    }
  }, [map, infowindow]);
  return (
    <NaverMap
      // uncontrolled
      defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
      defaultZoom={10}
      defaultMapTypeId={navermaps.MapTypeId.NORMAL}
      ref={setMap}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={() => {
            infowindow.setContent(
              '<div style="padding:20px; line-height:1.5">' +
                "해충 명: " +
                marker.insectName +
                "<br/>" +
                "해충 발생 날짜: " +
                marker.date +
                "</div>"
            );
            infowindow.open(
              map,
              new navermaps.LatLng(marker.position.lat, marker.position.lng)
            );
          }}
        />
      ))}
      <InfoWindow ref={setInfoWindow} />
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
