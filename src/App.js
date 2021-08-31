import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Search from './Search';
import About from './About';

export default function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Search">Start</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
        <hr /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}