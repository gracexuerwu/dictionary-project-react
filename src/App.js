import './App.css';
import Signature from './Signature';
import Dictionary from './Dictionary';
import Lottie from 'lottie-react';
import nyanCat from "./animation/nyanCat.json";
// import background from "./images/background.png"

export default function App() {
  return (
    <div className="App">
      {/* <div style={{ backgroundImage: `url(${background})` }} className="bg-image"> */}
      <div className="container">
        <h1 className="App-header">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <Lottie animationData={nyanCat} className="nyanCat" /></div>
            <div className="col-4 text-center">
              Dictionary
            </div>
          </div>
        </h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          <Signature />
        </footer>
      </div>
    </div>
    // </div>
  );
}

