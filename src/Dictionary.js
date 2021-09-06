import axios from 'axios';
import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f9170000100000137235bce8cbd470d8444fc1c6da3ebb0";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form className="search-form" onSubmit={search}>
                <div className="form-row">
                    <div className="col-10 btn">
                        <input type="search" id="form1" className="form-control" autoFocus={true} onChange={handleKeywordChange} placeholder="What word do you want to look up?" />
                    </div>
                    <div className="col-2 btn search-btn">
                        <button type="submit" className="search-button"><span className="search-font">SEARCH</span></button>
                    </div>
                </div>
            </form>
            <Results results={results} photos={photos} />
            <Photos photos={photos} results={results} />
        </div>
    );
}
