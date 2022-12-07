import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import {v4} from 'uuid';

import axios from 'axios';
import Header from './Components/Header';

function App() {

/* Ya no lo vamos a necesitar (hardcoded) porque lo tomaremos del input del usuario
  const array = [{id:1, tarea:"ir a clase", completed:false },
                 {id:2, tarea:"no saltarme clase", completed:false}];
*/

  //Usamos useRef para capturar en listaRef el texto introducido por el usuario en "input ref={listaRef}
  const listaRef = useRef();
 
  //Inicializamos nuestra varible de estado con un array vacío "[]"
  const [listaElementos, setListaElementos] = useState([]);
 
  useEffect(() => {
    handleLoadData();
  }, []);

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
      url: './todos.json'
      //url: 'https://jsonplaceholder.typicode.com/todos'
      //data: {} -> Datos en caso de ser petición POST

    }).then(function (response){

      copyToDos(response.data);

    });

  }

  const copyToDos = (data) => {

    const newTasks = data.map(function (task){

      return {id: task.id, tarea: task.title, completed: task.completed};

    });

    setListaElementos(newTasks);

  }

  return (
    <>
      <Header />
      <div className='container mt-5'>
        <ToDoList elementos = {listaElementos} toggleToDo={toggleToDo} />
        <div class="input-group mb-3">
          <input className='form-control mt-4' ref={listaRef} type="text" placeholder="Introduce tu tarea: "/>
        </div>
        <button type="button" class="btn btn-primary m-2" onClick={handleAddList}>➕</button>
        <button type="button" class="btn btn-primary" onClick={handleClear}>➖</button>
        <p class="text-center fs-4 mt-4">Tareas por completar: {listaElementos.filter(elemento => !elemento.completed).length}</p>
      </div>
    </>
  );
}

//listaref referencia es como ID
//const [lista, setLista] es como java get set atttr priv no modificable sin acceder a esa funcion (variable state)
export default App;