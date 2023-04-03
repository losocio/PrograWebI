import './App.css';
import React, { useState, useEffect, useRef } from 'react';

//import ToDoList from './Components/ToDoList';
import AccordionList from './Components/AccordionList';
import GeckoCarousel from './Components/GeckoCarousel';
import Navbar from './Components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from 'axios';

import {v4} from 'uuid';

function App() {

    const [listElements, setListElements] = useState([]); //useState for varibles the can be updated by the user
    
    const inputRef = useRef();

    useEffect(() => {
        // axios MUST be inside a useEffect so it only fetches data once
        axios({
            method: 'GET',
            url: './todos.json'
            //url: 'https://jsonplaceholder.typicode.com/todos'
            //data: {} -> Data in case of POST request
        }).then(response => {
            setListElements(response.data); // DONT FORGET THE .data I WANTED TO DIE FOR HOURS CAUSE OF THIS
        });
    }, []);

    console.log(listElements);
    const handleAddList = () => {
        if(inputRef.current.value !== "") {
            //const listCopy = listElements; No es necesario
            setListElements([...listElements, {id:v4(), title:inputRef.current.value, completed:false}]);
        }
        inputRef.current.value = "";
    }
    
    return(
        <>  
            <Navbar/>
            <div className='container mt-5'> 
                <AccordionList elements={listElements}/>
                <input 
                    className='form-control mt-5 mb-4' 
                    ref={inputRef} 
                    type="text" 
                    placeholder="Introduce tu tarea:"/>
                <button type="button" className="btn btn-primary m-2" onClick={handleAddList}>ADD</button>
            </div>
            <GeckoCarousel geckos={["./images/gecko0.jpg", "./images/gecko1.jpg", "./images/gecko2.jpg", "./images/gecko3.jpg"]}/>
        </>
    );
    //https://getbootstrap.com/docs/5.3/utilities/spacing/#example
    //https://getbootstrap.com/docs/5.3/layout/grid/#example
    /*
    return (      
        <>
            <ToDoList elements={listElements}/>
        </>  
    );
    */
}

export default App;
