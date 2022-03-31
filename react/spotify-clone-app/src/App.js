import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

// all communication with spotify
const spotify = new SpotifyWebApi();

function App() {
  //run code based on a given condition
  const [token,setToken] = useState(null);
  
  
  useEffect(()=>{
    //code
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token)

      spotify.getMe()
      .then( (user)=>{
        console.log('🧑',user)
      })
    }
  },[]);

  return (
    <div className="app">
    
    {/* spotify logo */}
    {/* login with spotify button */}
    {
      token ? (<Player/>) : (<Login/>)
    }
    
    </div>
  );
}

export default App;
