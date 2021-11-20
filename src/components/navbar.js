import React, { useState } from 'react';
import './navbar.css';
// import '../index.css';

function NavBar(props){
    const {handleAddMovieList,moviesList}=props;
    const [searchText,setSearchText]=useState("");
    const [searchMovieResult,setsearchMovieResult]=useState(null);
    console.log("searchText",searchText);
    console.log("searchMovieResult",searchMovieResult);


    const handleClick= async ()=>{
        if(searchText){
       const res= await fetch(`http://www.omdbapi.com/?t=${searchText}&apikey=891a9115`);
       const data=await res.json();
       console.log("movies Api Data",data);
       setsearchMovieResult(data);
    }
    
    }
    const handleAddtoMovieList=()=>{
        const findMovieInList=moviesList.findIndex((element) => element.Title ===searchMovieResult.Title );
        if(findMovieInList!==-1)
        console.log(searchMovieResult,"  is Already in the movies List");
        else
        handleAddMovieList(searchMovieResult);
        setsearchMovieResult(null);
        setSearchText("");
        // console.log("moviesList",moviesList);
    }
    return (
        <div className="nav">
            <div className="search-container">
            <input onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
            <button className='search-btn' onClick= {handleClick}>Search</button>
            </div>

            {searchMovieResult && (
                <div className='search-results'>
                    <div className='search-result'>
                        <img src={searchMovieResult.Poster} alt='search-pic'/>
                        <div className='movie-info'>
                            <span >{searchMovieResult.Title}</span>
                            <button onClick={handleAddtoMovieList}> Add to Movies</button>
                            </div>
                    </div>
                    
                </div>
            )
            }
        </div>
           )
    }
export default NavBar;