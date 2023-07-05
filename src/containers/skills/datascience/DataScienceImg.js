import React from "react";
import Lottie from "lottie-react";
import animationData from "./charts.json";

// import { useLottie } from "lottie-react";
//import data from "./data.svg";

//for animated svgs use json file
export default function DataScienceImg() {
  const style = {
    transform: "rotateY(180deg)",
    height: "30rem",
    widht: "30rem",
  };
  return <Lottie animationData={animationData} style={style} />;
  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./charts.json"),
  //   });
  // }, []);
  // return (
  //   <div className="App">
  //     <div className="container" ref={container}></div>
  //   </div>
  // );
}
//for static svgs
// class DataScienceImg extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//       <img src={data} alt="" width="450"/>
//       </div>
//       </div>
//     );
//   }
// }

// export default DataScienceImg;
