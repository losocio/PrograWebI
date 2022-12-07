import React from 'react';
import axios from 'axios';

export default function Participants() {
    axios({

        method: 'GET',
        url: './users.json'
        //url: 'https://jsonplaceholder.typicode.com/users'
        //data: {} -> Datos en caso de ser petición POST
  
      }).then(function (response){
  
        copyToDos(response.data);
  
      });
    
    
    return(
        <>
            <ul>
                
            </ul>
        </>
    )
}