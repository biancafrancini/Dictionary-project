import React , { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(){
    let [keyWord , setKeyWord] = useState("");
    let [results, setResults] = useState(null);

 function handleResponse(response){
     console.log(response.data[0]);
     setResults(response.data[0]);
 }    

 function handleSubmit(event){
    event.preventDefault();
    search();
 }
    function search(keyword) {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
        </div>
    );
}