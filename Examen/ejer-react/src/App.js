import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {v4} from 'uuid';

import AlbumList from './Components/AlbumList';
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

    const [listAlbums, setListAlbums] = useState([]); 

    const addAlbumRef = useRef();

    const searchAlbumRef = useRef();

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/albums'
        }).then(response => {
            setListAlbums(response.data); 
        });
    }, []);

    const handleAddList = () => {
        if(addAlbumRef.current.value !== "") {
            setListAlbums([...listAlbums, {id:v4(), title:addAlbumRef.current.value, completed:false}]);
        }
        addAlbumRef.current.value = "";
    }

    const handleSearchAlbum = () => {
        console.log(searchAlbumRef.current.value);
        
        //if(searchAlbumRef.current.value !== "") {
            setListAlbums(listAlbums.filter((album) => {
                return album.title.includes(searchAlbumRef.current.value);
            }));
        //}

        searchAlbumRef.current.value = "";
    }
    
    return(
        <>  
            <Header/>
            <div className="container mt-5 bg-primary">
                <h2 className="mt-5 text-center bg-success text-light">Lista Albumes</h2>
                <input 
                        className='form-control mt-5 mb-5' 
                        ref={searchAlbumRef} 
                        type="text" 
                        placeholder="Buscar un album: "
                />
                <button type="button" className="btn btn-danger m-1" onClick={handleSearchAlbum}>Buscar Album</button>
                <div className='container mt-5 mb-5 pb-4 bg-info'> 
                    <AlbumList albums={listAlbums}/>
                    <input 
                        className='form-control mt-5 mb-4' 
                        ref={addAlbumRef} 
                        type="text" 
                        placeholder="Añadir un album: "/>
                    <button type="button" className="btn btn-danger m-1" onClick={handleAddList}>Añadir Album Nuevo</button>
                </div>
            </div>
        </>
    );
}

export default App;

