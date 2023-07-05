import React from "react";
import "./LoaderLogo.css";
import Lottie from "lottie-react";
import animationData from "../../assets/logo/logo-01.json";

// class LogoLoader extends React.Component {

const LogoLoader = () => {
  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LogoLoader;
