import React from "react";

export default function Phonetic(props){
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <a href={props.phonetics.audio} rel="noreferrer" target="_blank">
                Listen
            </a>
            <br />
            {props.phonetics.text}
            </div>
    )
}