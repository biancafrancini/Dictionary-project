import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <section>
            <a href={props.phonetics.audio} rel="noreferrer" target="_blank">
                Listen
            </a>
            <br />
            {props.phonetics.text}
            </section>
            </div>
    )
}