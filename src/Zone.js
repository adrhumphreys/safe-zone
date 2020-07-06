import React from "react";

function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

function Zone(props) {
  const { width, height } = props.ratio;
  const baseSize = 500;
  const ratio = Math.min(baseSize / width, baseSize / height);
  const calculatedWidth = width * ratio;
  const calculatedHeight = height * ratio;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const style = {
    width: calculatedWidth,
    height: calculatedHeight,
    border: "3px inset " + hexToRGB(randomColor, 1),
    background: hexToRGB(randomColor, 0.1),
  };

  return (
    <div className="zone" style={style}>
      <p>
        Ratio: {width}-{height}
      </p>
    </div>
  );
}

export default Zone;
