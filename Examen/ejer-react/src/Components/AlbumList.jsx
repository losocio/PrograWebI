import React from "react";

export default function AlbumList({albums}) {
    
    return(
        <ul>
            {albums.map((album) => {
                return(
                    <li key={album.id}>
                        {album.title}
                    </li>
                )
            })}
        </ul>
    );
    
}