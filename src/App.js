import './App.css';
import Signature from './Signature';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">
          Dictionary coming soon..
        </h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          <Signature />
        </footer>
      </div>
    </div>
  );
}

