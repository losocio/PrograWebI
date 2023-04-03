import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {v4} from 'uuid';

function App() {
  
  
  useEffect(() => { // se ejecuta axios al cargar la pagina
    console.log("testingUseEffect");
  }, []);
  //});

  console.log("testing");

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-warning m-5">
          <div className="col bg-danger m-4">
            <button type="button" className="btn btn-light m-2 border">Sortear</button>
          </div>
          <div className="col bg-primary m-4">
            <p>klklk</p>
          </div>
        </div>
      </div>    
    </>
  );
}

export default App;
