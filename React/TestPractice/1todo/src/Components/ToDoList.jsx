import React from "react";
//import ToDoElement from "./ToDoElement";

export default function ToDoList({elements}) {
    /*
    return (
        // {} doesnt work, () does. JS is retarded 
        <ul>
            {elements.map((element)=> ( // The arrow function must return something but if its just 1 line it returns without explicitly putting return
                <ToDoElement element={element}/>
            ))}
        </ul>
    );
    */
    // It only works in one specific way, this one isnt it
    
    return(
        <ul>
            {elements.map((element) => {
                return(
                    <li key={element.id}>
                        {element.title}
                    </li>
                )
            })}
        </ul>
    );
    
}