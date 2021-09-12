import './Search.css';
// import Signature from './Signature';
import Dictionary from './Dictionary';
import Lottie from 'lottie-react';
import nyanCat from "./animation/nyanCat.json";

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

