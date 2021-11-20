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
    console.log(movie.Title," is successfully added to  favorite movie List");
    // console.log("favorite movie list",favouriteList);
    
  }
  const handleUnfavourite=(movie)=>{
    let unFavourite=favouriteList.filter((singleMovie)=>singleMovie!==movie);
    setFavouriteList(unFavourite);
    console.log(movie.Title," is successfully removed from favorite movie List");
  }
const currList=isFab?favouriteList:moviesList;
const isFavourite=(movie)=>{
  const index =favouriteList.findIndex((singleMovie) =>singleMovie===movie)
  if(index!==-1)
      return true;
  return false;
}
const handleAddMovieList=(movie)=>{
setMoviesList([movie,...moviesList]);
}
  return (
    
    <div className="App" >
    <NavBar handleAddMovieList={handleAddMovieList} moviesList={moviesList}/>
    <div className="main">
      <div className="tabs">
        <div className={ `tab ${isFab? "":"active-tabs"}`} onClick={()=>setfab(false)}>Movies</div>
        <div className={ `tab ${isFab? "active-tabs":""}`} onClick={()=>setfab(true)}>Favourite</div>
      </div>
      <div className="list" style={{margin:'auto'}}> 
      {
      currList.map((movie,index)=>
      <MovieCard key={index} movie={movie} handleAddFab={handleAddFab} handleUnfavourite={handleUnfavourite}isFab={isFavourite(movie)}></MovieCard>
      
      )
      }
      </div>
    </div>

    </div>
  );
}

export default App;
