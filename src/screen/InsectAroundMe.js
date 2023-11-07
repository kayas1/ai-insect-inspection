import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";

function Map() {
  function MyMap() {
    const navermaps = useNavermaps();
    let lat = 37.3595704;
    let lng = 127.105399;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    }, alert("권한을 허락해주십시오"));
    return (
      <NaverMap defaultCenter={new navermaps.LatLng(lat, lng)} defaultZoom={15}>
        <Marker position={new navermaps.LatLng(lat, lng)} />
      </NaverMap>
    );
  }
  return (
    <div className="map-loader">
      <div className="map">
        <NavermapsProvider ncpClientId={process.env.MAPCLIENTID}>
          <MapDiv
            style={{
              width: "100%",
              height: "600px",
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
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default InsectAroundMe;
