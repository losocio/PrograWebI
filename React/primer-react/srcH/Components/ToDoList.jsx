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

        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>

  ) */

  return(
    <ul className="list-group">
        {elementos.map((elemento)=> (
            <ToDoElement task={elemento} toggleToDo={toggleToDo} />
        ))}
    </ul>
  );

}
