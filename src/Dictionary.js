import axios from 'axios';
import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        // console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        // alert(`searching for ${keyword}`);

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form class="search-form" onSubmit={search}>
                <div className="form-row">
                    <div className="col-10 btn">
                        <input type="search" id="form1" class="form-control" autoFocus={true} onChange={handleKeywordChange} placeholder="What word do you want to look up?" />
                    </div>
                    <div className="col-2 btn search-btn">
                        <button type="submit" className="search-button"><span className="search-font">SEARCH</span></button>
                    </div>
                </div>
            </form>
            {keyword}
            <Results results={results} />
        </div>
    );
}
