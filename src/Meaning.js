import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';


export default function Meaning(props) {
    return (
        <div className="Meaning">
            <div class="row">
                <div className="col-2 typeOfWord">{props.meaning.partOfSpeech}</div>
                <div className="col-10 definitionan">
                    {props.meaning.definitions.map((definition, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    Definition: {definition.definition}
                                    <br />
                                    <p>Examples: {definition.example}</p>
                                    <Synonyms synonyms={definition.synonyms} />
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    );
}