import { useState } from 'react';
import NavBar from './components/navbar.js';
import './App.css';
import {data} from './data';
import MovieCard from './components/movieCard.js';

function App() {
  const [moviesList,setMoviesList]=useState(data);
  const [favouriteList,setFavouriteList]=useState([]);
  const [isFab,setfab] =useState(false);
  const handleAddFab=(movie)=>{
    setFavouriteList((prevState)=>[...prevState,movie]);
    console.log("adding favorite movie");
    console.log("favorite movie list",favouriteList);
    
  };
const currList=isFab?favouriteList:moviesList;
  return (
    
    <div className="App" >
    <NavBar/>
    <div className="main">
      <div className="tabs">
        <div className={ `tab ${isFab? "":"active-tabs"}`} onClick={()=>setfab(false)}>Movies</div>
        <div className={ `tab ${isFab? "active-tabs":""}`} onClick={()=>setfab(true)}>Favourite</div>
      </div>
      <div className="list"> 
      {
      currList.map((movie,index)=>
      <MovieCard key={index} movie={movie} handleAddFab={handleAddFab}></MovieCard>
      
      )
      }
      </div>
    </div>

    </div>
  );
}

export default App;
