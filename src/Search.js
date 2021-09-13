import './Search.css';
import Dictionary from './Dictionary';
import Lottie from 'lottie-react';
import nyanCat from "./animation/nyanCat.json";
import escButton from './images/escButton.png';
import {
  Link,
} from "react-router-dom";

export default function Search() {
  return (
    <div className="Search" id="page-content">
      <div className="container" id="content-wrap">
        <h1 className="Search-header">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <Lottie animationData={nyanCat} className="nyanCat" /></div>
            <div className="col-4 text-center">
              <a href="/" className="Dictionary-title">
                Dictionary
              </a>
            </div>
          </div>
        </h1>
        <Link to="/" className="Escape-control"><img src={escButton} alt="" className="escButton" /></Link>
        <main>
          <Dictionary />
        </main>
        {/* <footer id="footer sticky-footer">
          <Signature />
        </footer> */}
      </div>
    </div>
  );
}

