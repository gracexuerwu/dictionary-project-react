import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';


export default function Meaning(props) {
    return (
        <div className="Meaning">
            <div className="row">
                <div className="col-2 typeOfWord">{props.meaning.partOfSpeech}</div>
                <div className="col-10 definitionan">
                    {props.meaning.definitions.map((definition, index) => {
                        if (index < 1) {
                            return (
                                <div key={index}>
                                    <p>
                                        Definition: {definition.definition}
                                        <br />
                                        Examples: {definition.example}
                                        <Synonyms synonyms={definition.synonyms} />
                                    </p>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>


        </div>
    );
}