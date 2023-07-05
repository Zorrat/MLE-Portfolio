import React from "react";
import Lottie from "lottie-react";
import animationData from "./database.json";
// for animated svgs use json file

export default function cloudImg() {
  const style = {
    transform: "translateY(-2%)",
    height: "30rem",
    widht: "30rem",
  };
  return (
    <div>
      <Lottie animationData={animationData} style={style} />
    </div>
  );
}
