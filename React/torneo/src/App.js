import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import {v4} from 'uuid';
//import axios from 'axios';

import Participants from './Components/Participants';

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row bg-warning m-5">
          <div class="col bg-danger m-4">
            <Participants/>
            <button type="button" class="btn btn-light m-2 border">Sortear</button>
          </div>
          <div class="col bg-primary m-4">
            <p>klklk</p>
          </div>
        </div>
      </div>    
    </>
  );
}

export default App;
