import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';
import SoundIcon from './images/sound_icon.png';

export default function Results(props) {
    console.log(props.results)
    let audioFile = props.results.word[0].phonetics[0].audio
    let audio = new Audio(audioFile)
    const start = () => {
        audio.play()
        if (props.results) {
        }
        return (
            <div className="Results">
                <div className="row">
                    <div className="col-1 soundIconCol">
                        <img src={SoundIcon} alt="" className="SoundIcon" onClick={start} />
                    </div>
                    <div className="col-11">
                        <h2 className="text-uppercase">{props.results.word}</h2>
                    </div>
                </div>
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