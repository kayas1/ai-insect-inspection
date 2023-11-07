import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";

function NaverMapApi() {
  function MyMap() {
    const navermaps = useNavermaps();

    return (
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
        defaultZoom={15}
      >
        <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} />
      </NaverMap>
    );
  }
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <MyMap />
    </MapDiv>
  );
}

function Map() {
  return (
    <div className="map-loader">
      <div className="map">
        <NavermapsProvider ncpClientId={process.env.MAPCLIENTID}>
          <NaverMapApi />
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
