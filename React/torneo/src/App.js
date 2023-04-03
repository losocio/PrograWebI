import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import ShowParticipants from './Components/ShowParticipants';
import Matchmake from './Components/Matchmake';

function App() {
  const [participantList, setParticipantList] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
    
  useEffect(() => { // se ejecuta axios al cargar la pagina
  
    axios({ //axios no se ejecuta hasta que le llaman

      method: 'GET',
      url: './users.json'
      //url: 'https://jsonplaceholder.typicode.com/users'
      //data: {} -> Datos en caso de ser petición POST
    
    }).then(function (response){
      const participants = response.data.map((participant) => {
        return {id: participant.id-1, name: participant.name, username: participant.username, email: participant.email};
        //return {id: v4(), name: participant.name, username: participant.username};
      }); //Entiendo que participants guarda consecutivamente y no sobreescribe cada output del .map()
      
      setParticipantList(participants);
      
      /*
      data = response.data; //response trae mucha cosas ademas de un array json
      console.log("klk");
      console.log(response.data);
      */
    });
  }, []);
  
  //console.log(participantList);
  //console.log({participantList});
  
  //AL PASAR participantList a ShowParticipants se encapsula en un objeto, no se xq
  //Si metes en onClick setState se ejecutas sin hacer click, solo funciona con () => Puta mierda de diseño imo  
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-warning m-5">
          <div className="col bg-danger m-3 text-center">
            <p className="fs-4 m-3">Players</p>
            <ShowParticipants participants = {participantList}/>
            <button type="button" className="btn btn-light m-3 border" onClick={() => setShowMatches(true)}>Matchmake</button>
          </div>
          <div className="col bg-primary m-3 text-center">
            <p className="fs-4 m-3">Matches</p>
            {showMatches && <Matchmake participants = {participantList}/>}
          </div>
        </div>
      </div>    
    </>
  );
}

export default App;
