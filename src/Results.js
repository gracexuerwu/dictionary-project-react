import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import './Results.css';
import SoundIcon from './images/sound_icon.png';
import pacMan from './images/pacman.png';

export default function Results(props) {
  let audio;
  const start = () => {
    audio.play()
  }

  console.log(props.results)
  if (props.results) {
    let audioFile = props.results.phonetics[0].audio;
    audio = new Audio(audioFile);
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
        <div className="row">
          <div className="col-10">
            <Phonetics phonetics={props.results.phonetics} />
          </div>
          <div className="col-2">
            <img src={pacMan} alt="" className="pacman" />
          </div>
        </div>
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div />
    );
  }
}
