import React from "react";
import Map from "react-map-gl";
//kolkata--22.5726° N, 88.3639° E


function Maps() {
  return (
    <Map
      initialViewState={{
        longitude: -122.508,
        latitude: 37.894,
        zoom: 10,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/arunavabasu-03/cl0nzst6200ak14ldbinmtv8f"
      mapboxAccessToken={process.env.mapbox_key}
    />
  );
}

export default Maps;
