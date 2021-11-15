import React from "react";
import '../components/movieCard.css';
// import '../index.css';
function MovieCard(props){
    const {movie,handleAddFab}=props;
    console.log(movie);
    return ( 
    <div className="movie-card">
      <div className="left">
          <img src={movie.Poster} alt ="movie-poster"/>
          
      </div>
      
      <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          <div className="favourite">
              <button className='favourite-btn' onClick={()=>{handleAddFab(movie)}}>Favourite </button>
              </div>
          </div>
        </div>
    </div>
    )
}
export default MovieCard;