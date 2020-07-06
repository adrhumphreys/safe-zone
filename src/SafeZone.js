import React, { useState } from "react";
import Zone from "./Zone";

function SafeZone() {
  const [ratios, setRatios] = useState([
    { width: 16, height: 9 },
    { width: 4, height: 3 },
    { width: 9, height: 8 },
    { width: 3, height: 2 },
    { width: 9, height: 4 },
  ]);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const zones = ratios.map((ratio) => <Zone ratio={ratio} />);

  return (
    <div>
      <p>Safe zone based on a 500x500px area</p>
      <div className="safe-zones">{zones}</div>
      <p>Custom ratios:</p>
      <label>Width: </label>
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <br />
      <label>Height: </label>
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={() => setRatios([...ratios, { width, height }])}>
        Add ratio
      </button>
      <button onClick={() => setRatios([])}>Reset ratios</button>
    </div>
  );
}

export default SafeZone;
