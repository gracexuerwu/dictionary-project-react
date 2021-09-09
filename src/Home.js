import React from 'react';
import './Home.css';
// eslint-disable-next-line no-unused-vars
import Lottie from 'lottie-react';
// eslint-disable-next-line no-unused-vars
import nyanCat from "./animation/nyanCat.json";
import PolygonLeft from './images/Polygon_left.png';
import PolygonRight from './images/Polygon_right.png';
import Signature from './Signature';

import {
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        {/* <div className="flex-container"> */}
        {/* <Lottie animationData={nyanCat} className="nyanCat" /> */}
        <div className="dictionary">
          Dictionary
        </div>
      </div>
      <div>
        {/* </div> */}
      </div >
      <div className="controls">
        <div className="flex-container">
          <img src={PolygonLeft} alt="" className="PolygonLeft" />
          <Link to="/Search" className="Search-control" >PRESS START</Link>
          <img src={PolygonRight} alt="" className="PolygonRight" />
        </div>
        <div className="about">
          <Link to="/About" className="About-control">ABOUT</Link>
        </div>
      </div>
      <div className="fixed-bottom Signature">
        <Signature />
      </div>
    </div >
  );
}