import React from 'react';
import './About.css';
import backButton from './images/backButton.png';
import {
    Link,
} from "react-router-dom";

export default function About() {
    return (
        <div className="About">
            <div className="About-header">
                <a href="/" className="Dictionary">
                    Dictionary
                </a>
            </div>
            <Link to="/" className="Back-control"><img src={backButton} alt="" className="backButton fixed-top" /></Link>
            <div className="About-wrapper">
                <h1>
                    ABOUT
                </h1>
                <p>
                    THIS DICTIONARY PROJECT WAS BUILT BY <a href="https://www.linkedin.com/in/grace-ade-wu/">GRACE WU</a> AS A FUN and LIGHTHEARTED PROJECT TO LEARN AND PRACTICE THE NICKS AND NACKS OF REACT.JS.
                </p>
                <h2>
                    CREDITS
                </h2>
                <p>
                    THIS PROJECT WAS BUILT WITH FREE API(S) IN COURTESY OF <a href="https://dictionaryapi.dev/">FREE DICTIONARY API</a> AND <a href="https://www.pexels.com/api/">PEXELS</a>
                </p>
            </div>
        </div >
    );
}