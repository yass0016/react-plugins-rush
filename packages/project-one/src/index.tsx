import React, { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prevState) => ++prevState);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={addCount}>Add Count</button>
      </div>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const w = window as any;

w["custom"].add(<Counter />);

export default Counter;
