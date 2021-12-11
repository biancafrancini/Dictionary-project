import React , { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyWord , setKeyWord] = useState(null);

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyWord} definition`);
    }

    function handleKeyWordChange(event){
        setKeyWord(event.target.value);
    }
    return (<div className="Dictionary">
            Hello from Dictionary
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
            </form>
        </div>
    );
}