import React from "react";

export default function ToDoElement({element}) {

    return (
        <li key={element.id}>
            {element.title}
        </li>
    );
}