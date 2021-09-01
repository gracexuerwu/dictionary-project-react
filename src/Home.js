import React from 'react';
import './Home.css';
// eslint-disable-next-line no-unused-vars
import Lottie from 'lottie-react';
// eslint-disable-next-line no-unused-vars
import nyanCat from "./animation/nyanCat.json";

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
        <a href="/Search" className="Search-control" >PRESS START</a>
        <div>
          <a href="/About" className="About-control">ABOUT</a>
        </div>
      </div>
    </div >
  );
}