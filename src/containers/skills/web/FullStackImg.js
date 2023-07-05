import React from "react";
import Lottie from "lottie-react";
import animationData from "./fullanim.json";

export default function FullStackImg() {
  const style = {
    transform: "translateY(-5%)",
    height: "30rem",
    widht: "30rem",
  };
  return (
    <div>
      <Lottie animationData={animationData} style={style} />
    </div>
  );
}

// //for static images
// class FullStackImg extends Component {
//     render() {
//       return (
//         <div className="App">
//           <div className="container">
//         <img src={data} alt="" width="450"/>
//         </div>
//         </div>
//       );
//     }
// }

// export default FullStackImg;
