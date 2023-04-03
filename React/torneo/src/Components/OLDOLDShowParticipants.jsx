import React from 'react';
import axios from 'axios';

export default function ShowParticipants() {


  axios({ //axios no se ejecuta hasta que le llaman

    method: 'GET',
    url: './users.json'
    //url: 'https://jsonplaceholder.typicode.com/users'
    //data: {} -> Datos en caso de ser petición POST
  
  }).then(function (response){
    const participants = data.map((participant) => {
      return {id: participant.id, name: participant.name, username: participant.username};
    });
    setListaElementos(participants);

    data = response.data; //response trae mucha cosas ademas de un array json
    //response son varios elementos asi que no se puede hacer .data
    console.log("klk");
    console.log(response.data);
  });
  
  //data = ["Juan", "Alvaro", "Jaime"];
  //console.log(data);
  
  const participantList = data.map((elemento) => 
    <li className="list-group-item">
      {elemento}
      {console.log(elemento)}
    </li>
  )

  return(
    <ul className = "list-group m-4">
      {participantList}
    </ul>
  )
}