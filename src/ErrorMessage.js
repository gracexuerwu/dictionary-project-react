import React from 'react';
import './ErrorMessage.css';
import puff from './images/puff.png';


export default function ErrorMessage(props) {
    return (
        <div className="ErrorMessage">
            <img src={puff} alt="" className="puff" />
            ERROR 404 Can't find {props.word} :(
        </div>

    );
}