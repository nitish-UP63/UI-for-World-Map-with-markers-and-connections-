import "./App.css";
import {
  ComposableMap,
  Geography,
  Geographies,
  Marker,
  Line,
} from "react-simple-maps";

import { markers } from "./data/markers";
import { lineData } from "./data/connections";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function App() {
  return (
    <div className="app">
      <div className="heading">World Map</div>
      <div className="map">
        <ComposableMap projectionConfig={{ scale: 140 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {/* connections between markers using coordinates */}
          {lineData.map(({ from, to, key }) => (
            <Line
              key={key}
              from={from}
              to={to}
              stroke="#CF9FFF"
              strokeWidth={11}
            />
          ))}
          {/* Mapping markers on World Map */}
          {markers.map(
            ({ name, coordinates, markerOffset, data, key, radius }) => (
              <Marker key={key} coordinates={coordinates}>
                <circle r={radius} fill="#CF9FFF" strokeWidth={2} />
                <text
                  className="text"
                  textAnchor="middle"
                  style={{
                    fontFamily: "system-ui",
                    fill: "#5D5A6D",
                    fontSize: "9px",
                  }}
                >
                  {name}
                </text>
                <text
                  className="text"
                  textAnchor="middle"
                  y={markerOffset}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#5D5A6D",
                    fontSize: "9px",
                  }}
                >
                  {data}
                </text>
              </Marker>
            )
          )}
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
