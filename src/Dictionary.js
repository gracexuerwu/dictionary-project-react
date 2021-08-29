import axios from 'axios';
import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword}`);

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
            {keyword}
            <Results results={results} />
        </div>
    );
}
