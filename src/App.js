import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { MovieCard } from "./Components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=62623e1c";

  const searchMovies = async (title) => {
    try{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search)
    }
    catch(error){
      console.log("Error fetching data:", error)
    }
  };
  

  useEffect(() => {
   let timerOut = setTimeout(()=>{
      searchMovies(search)
    }, 2000);

    return () => clearTimeout(timerOut)
  }, [search]);

  

  return (
    <div className="app">
      <h1>MovieHunt</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search your movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
