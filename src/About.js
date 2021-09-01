import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="About">
            <div className="About-header">
                <a href="/" className="Dictionary">
                    Dictionary
                </a>
            </div>
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
                    THIS PROJECT WAS BUILT WITH A FREE API IN COURTESY OF <a href="https://dictionaryapi.dev/">HTTPS://DICTIONARYAPI.DEV/</a> 
                                    </p>
                                </div>
        </div >
    );
}