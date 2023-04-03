import React from 'react';

export default function ShowParticipants({participants}) { //AQUI ESTABA EL PROBLEMA faltaba {} en participants
  //Destructuring
  
  //participants = [{id:0, name:"pepito"},{id:1, name:"pepe"},{id:2, name:"juan"}];
  console.log(participants);

  //.map() is not a function AQUI ESTA EL PROBLEMA
  //faltaba el .name en {participant.name} 
  const participantList = participants.map((participant) => {
    return(
      <li key = {participant.id} className="list-group-item">
        {participant.name}
      </li>
    )
  });
  
  return(
    <ul className = "list-group m-4">
      {participantList}
    </ul>
  );
  /*
  return(
    <ul className = "list-group m-4">
      participant
    </ul>
  );
  */
}