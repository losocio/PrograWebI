import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {v4} from 'uuid';

import ShowParticipants from './Components/compTest';

function App() {
  console.log("testing");
  const [participantList, setParticipantList] = useState([]);
  useEffect(() => {
    console.log("testingUseEffect");
  }, []);
  /*
  useEffect(() => { // se ejecuta axios al cargar la pagina
    console.log("testing");
    axios({ //axios no se ejecuta hasta que le llaman

      method: 'GET',
      url: './users.json'
      //url: 'https://jsonplaceholder.typicode.com/users'
      //data: {} -> Datos en caso de ser petición POST
    
    }).then(function (response){
      const participants = response.data.map((participant) => {
        return {id: v4(), name: participant.name};
        //return {id: v4(), name: participant.name, username: participant.username};
      }); //Entiendo que participants guarda consecutivamente y no sobreescribe cada output del .map()
      console.log(participants);
      
      setParticipantList(participants);
      
      /*
      data = response.data; //response trae mucha cosas ademas de un array json
      console.log("klk");
      console.log(response.data);
      
    });
  }, []);
  */

  console.log(participantList);

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-warning m-5">
          <div className="col bg-danger m-4">
            <ShowParticipants participants = {participantList}/>
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
