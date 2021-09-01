import './Search.css';
import Signature from './Signature';
import Dictionary from './Dictionary';
import Lottie from 'lottie-react';
import nyanCat from "./animation/nyanCat.json";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <h1 className="Search-header">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <Lottie animationData={nyanCat} className="nyanCat" /></div>
            <div className="col-4 text-center">
              <a href="/" className="Dictionary">
                Dictionary
              </a>
            </div>
          </div>
        </h1>
        <main>
          <Dictionary />
        </main>
        <footer className="fixed-bottom Signature">
          <Signature />
        </footer>
      </div>
    </div>
  );
}

