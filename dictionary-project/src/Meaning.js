import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
console.log(props.meaning);
    return (
        <div className="Meaning">
            <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        </section>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                     <br />
                    <div className="definition"> {definition.definition} </div>

                    <div className="example"><em>{definition.example}</em></div>
                    <Synonyms synonyms={definition.synonyms}/>
        </div>
            );
        })}
        </div>
    );
}