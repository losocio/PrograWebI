import React, {useState} from 'react';

export default function Matchmake({participants}) { 

	const shuffledParticipants = participants.sort(() => 0.5 - Math.random());
	const [matches, setMatches] = useState([]);
	console.log(shuffledParticipants);
	const matchLoop = [{
		id: 0, 
		opponent1: shuffledParticipants[2*0],
		opponent2: shuffledParticipants[2*0+1],
		winner: shuffledParticipants[2*0].name+' - '+shuffledParticipants[2*0+1].name,
		played: false
	},{
		id: 1, 
		opponent1: shuffledParticipants[2*1],
		opponent2: shuffledParticipants[2*1+1],
		winner: shuffledParticipants[2*1].name+' - '+shuffledParticipants[2*1+1].name,
		played: false
	}];
	/*
	const matchLoop = [];

	for(var i=0;i<shuffledParticipants.length/2;i++) {
		matchLoop.push({
			id: i, 
			opponent1: shuffledParticipants[2*i],
			opponent2: shuffledParticipants[2*i+1],
			winner: shuffledParticipants[2*i].name+' - '+shuffledParticipants[2*i+1].name,
			played: false
		});
	}
	*/
	setMatches(matchLoop); //TODO creo q esto causa los refresh
	console.log(matchLoop);
	console.log(matches);
	const playMatch = (match) => {
		const matchesCopy = matches;
		
		if(Math.round(Math.random())){
			matchesCopy[match.id].winner=match.opponent1.name;
			matchesCopy[match.id].played=true;
			setMatches(matchesCopy);
		}else{
			matchesCopy[match.id].winner=match.opponent2.name;
			matchesCopy[match.id].played=true;
			setMatches(matchesCopy);
		}
		console.log(match.winner);
	};

	const printMatches = matches.map(match => 
		
		//return( //No es necesario encapsularlo en un return
		<li 
			key={match.id}
			className={match.played ? "btn btn-info m-3" : "btn btn-success m-3"} 
			onClick={() => playMatch(match)}
		>
			{match.winner}
		</li>
		
  	);
  	
	return(
		<ul className="list-group m-4">
			{printMatches}
		</ul>
	);
}