import React from 'react'
import ToDoElement from './ToDoElement';

export default function ToDoList({elementos, toggleToDo}) {
  /*Para cada elemento del array pasado como parámetro en {elementos}, 
  añadimos a la lista (ul) una nueva entrada (li) con una "key" única (elemento.id) 
  y el contenido (elemento.tarea)
  */
  /* return (
    <ul>
        {elementos.map((elemento)=> (
            <li key={elemento.id}>{elemento.tarea}</li>
        ))}
    </ul>
  ) */

  return(
    <ul>
        {elementos.map((elemento)=> (
            <ToDoElement key={elemento.id} task={elemento} toggleToDo={toggleToDo} />
        ))}
    </ul>
  );

}
