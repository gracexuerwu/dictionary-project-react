import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
  return (
    <div>
      {
        props.phonetics.length > 0 ?
          <div className="pronounciation">[{props.phonetics[0].text}]</div>
          :
          <div className="pronounciation" />
      }
    </div>
  );
}