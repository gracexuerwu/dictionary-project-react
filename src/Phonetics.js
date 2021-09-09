import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
    return (
        <div className="pronounciation">[{props.phonetics[0].text}]</div>
    );
}