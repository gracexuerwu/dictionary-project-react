import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';

export default function Results(props) {
    console.log(props.results)
    if (props.results) {
        return (
            <div className="Results">
                <h2 className="text-uppercase">{props.results.word}</h2>
                <Phonetics phonetics={props.results.phonetics} />
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} photos={props.photos} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}