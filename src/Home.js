import React from 'react';
import './Home.css';
// eslint-disable-next-line no-unused-vars
import Lottie from 'lottie-react';
// eslint-disable-next-line no-unused-vars
import nyanCat from "./animation/nyanCat.json";

import {
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        {/* <Lottie animationData={nyanCat} className="nyanCat" /> */}
        <div className="dictionary">
          Dictionary
        </div>

        <div>
        </div>
      </div >
      <div className="controls">
        <div>
          <Link to="/Search" className="Search-control" >PRESS START</Link>
        </div>
        <div>
          <Link to="/About" className="About-control">ABOUT</Link>
        </div>
      </div>
    </div >
  );
}