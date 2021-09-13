import React from 'react';
import './Signature.css';
import gitCat from './images/gitCat.png';

export default function Signature() {
    return (
        <div className="Signature">
            © 2021 <a href="https://github.com/gracexuerwu/dictionary-project-react" target="_blank" rel="noreferrer" className="signatureGitLink">Open-source code</a>  <img src={gitCat} alt="" className="gitCat" /> by Grace Wu
        </div >
    );
}