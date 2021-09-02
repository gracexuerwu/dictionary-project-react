import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
                return (
                    <div key={index}>
                        <p>
                            Definition: {definition.definition}
                            <br />
                            <em>Examples: {definition.example}</em>
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                );
            })}

        </div>
    );
}