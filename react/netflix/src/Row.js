import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'
const BASE_URL = 'https://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([])
  
//   use effect hook
    useEffect( () =>{
        async function fetchData(){
            try{
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }catch( err){
                
            }
            
        }
        // calling fetchData
        fetchData();
    },[fetchUrl]);
    
    
    return (

        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* several row posters */}
                {/* fast rendering with key  */}
                {movies.map( movie => (
                    
                    <img key = {movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>

  )
}

export default Row