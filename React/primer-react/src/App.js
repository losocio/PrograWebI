import './App.css';
import React, { useRef, useState, Fragment } from 'react';
import ToDoList from './Components/ToDoList';
import {v4} from 'uuid';
import axios from 'axios';

function App() {

/* Ya no lo vamos a necesitar (hardcoded) porque lo tomaremos del input del usuario
  const array = [{id:1, tarea:"ir a clase", completed:false },
                 {id:2, tarea:"no saltarme clase", completed:false}];
*/

  //Usamos useRef para capturar en listaRef el texto introducido por el usuario en "input ref={listaRef}
  const listaRef = useRef();
 
  //Inicializamos nuestra varible de estado con un array vacío "[]"
  const [listaElementos, setListaElementos] = useState([]);
 
  //Implementaremos después el campo "completed": true | false
  const handleClear = ()=>{
    const nuevoElemento = listaElementos.filter((elemento)=>!elemento.completed);
    setListaElementos(nuevoElemento);
  };

  //Asignamos a la constante "elemento" el valor capturado en listaRef (input del usuario)
  const handleAddList = ()=>{
    const elemento = listaRef.current.value;
    if(elemento !== ""){
      //Si el texto introducido por el usuario no es vacío, añadimos a la lista actual "...listaActual", la nueva tarea introducida en la variable elemento.
      setListaElementos((listaActual)=>{
        return [...listaActual, {id:v4(), tarea: elemento, completed:false }];
      });
    }
    listaRef.current.value = "";
  };

  const toggleToDo = (id) =>{

    // Nos copiamos la lista de elementos
    const listCopy = [...listaElementos];

    // Buscamos el elemento de la lista que coincida con el parámetro ID e invertimos su estado completed
    const foundElement = listCopy.find((listElement) => listElement.id === id);
    foundElement.completed = !foundElement.completed;

    // Establecemos la lista de elementos a la nueva lista con el atributo completed cambiado
    setListaElementos(listCopy);

  }

  const handleLoadData = () => {

    axios({
      method: 'GET',
      //url: 'http://'
      url: './todos.json'
      //url: 'http://localhost:3000/todos.json'
      //data: {} -> datos en caso de ser peticion POST
    }).then(function(response){
        copyToDos(response.data);
    });
  }

  const copyToDos = (data) => {
    const newTasks = data.map(function(task){
      return {id: task.id, tarea: task.title, completed: task.completed};
    });
    setListaElementos(newTasks);
  }

  return (
    <Fragment>
      <ToDoList elementos = {listaElementos} toggleToDo={toggleToDo} />
      <input ref={listaRef} type="text" placeholder="Introduce tu tarea: "/>
      <button onClick={handleAddList}>➕</button>
      <button onClick={handleClear}>➖</button>
      <button onClick={handleLoadData}>➖</button>
    </Fragment>
  );
}

//listaref referencia es como ID
//const [lista, setLista] es como java get set atttr priv no modificable sin acceder a esa funcion (variable state)
export default App;
//TODA VARIABLE QUE DEPENDA DEL USER USAMOS VARIABLES DE ESTADO linea 17