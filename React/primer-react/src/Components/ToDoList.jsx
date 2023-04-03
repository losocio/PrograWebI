import React from 'react';
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
  //console.log(typeof elementos);
    //metiendo entre {} podemos usar codigo javasript
    return(
        <ul className = "list-group">
            {elementos.map((elemento)=> (
                <ToDoElement task={elemento} toggleToDo={toggleToDo} />
            ))} 
        </ul>
    );
//Antes era asi:
//<ToDoElement key={elemento.id} task={elemento} toggleToDo={toggleToDo} />
}
//TODO si creo una funcion dentro de la funcion del componente se usan las arrow function por convencion