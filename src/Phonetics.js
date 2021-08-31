import React from 'react';

export default function Phonetics(props) {
    return (
        <div>[{props.phonetics[0].text}]</div>
    );
}