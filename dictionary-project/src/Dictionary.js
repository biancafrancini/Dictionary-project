import React , { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(){
    let [keyWord , setKeyWord] = useState("");
    let [results, setResults] = useState(null);
    let[photo, setPhoto] = useState(null);

 function handleResponse(response){
     setResults(response.data[0]);
 }    

 function handlePexelsResponse(response){
    setPhoto(response.data.photos);
 }

 function handleSubmit(event){
    event.preventDefault();
    search();
 }
    function search(keyword) {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f917000010000015117a13c13c34f409dd1ce2d42445508";
    let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    

    function handleKeyWordChange(event){
        setKeyWord(event.target.value);
    }
    return (<div className="Dictionary">
        <section>
            <form className="Dictionary-form" onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} placeholder="Type a word.." onChange={handleKeyWordChange} />
            </form>
            </section>
            <br />
 
            <Results results={results} />
            <Photos photos={photo} />
        </div>
    );
}