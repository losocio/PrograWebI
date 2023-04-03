import React from 'react';

export default function ShowParticipants({participants}) { //AQUI ESTABA EL PROBLEMA faltaba {} en participants
  
  const participantList = participants.map((participant) => { //headingID != collapseID, duh
    return(
      <div key={participant.id} className="accordion-item">
        <h2 className="accordion-header" id={'heading'+participant.id}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+participant.id} aria-expanded="true" aria-controls={'collapse'+participant.id}>
            {participant.name}
          </button>
        </h2>
        <div id={'collapse'+participant.id} className="accordion-collapse collapse" aria-labelledby={'heading'+participant.id} data-bs-parent="#accordionParticipants">
          <div className="accordion-body">
            ID: {participant.id}
            <br></br>
            Username: {participant.username} 
            <br></br>
            E-mail: {participant.email}
          </div>
        </div>
      </div>
    )
  });

  /*
		<div className="accordion-item">
		<h2 className="accordion-header" id={participant.id}>
		  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#{participant.id}" aria-expanded="true" aria-controls="collapseOne">
			{participant.name}
		  </button>
		</h2>
		<div id={participant.id} className="accordion-collapse collapse" aria-labelledby={participant.id} data-bs-parent="accordionParticipants">
		  <div className="accordion-body">
			ID: {participant.id}
			<br></br>
			Username: {participant.username} 
			<br></br>
			E-mail: {participant.email}
		  </div>
		</div>
	  </div>
  */
  
  return(
    <div className="accordion" id="accordionParticipants">
  		{participantList}
	  </div>
  );
}