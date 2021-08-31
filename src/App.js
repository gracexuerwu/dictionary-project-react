import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Search from './Search';
import About from './About';

export default function App() {
    return (
        <Router>
            <div>
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