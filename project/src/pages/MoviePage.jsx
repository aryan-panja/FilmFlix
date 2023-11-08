import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { API_URL } from '../Components/Context'

const MoviePage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("batman");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
        setIsLoading(false);
      }
      else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 200);

    return () => clearTimeout(timerOut);

  }, [id]);

  if (isLoading) {
    return <div className="loading">LOADING...</div>

  }

  return (
    <>
      <section className='movie-section'>
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt={movie.imdbID} />
          </figure>
          <div className="card-content">
            <p className='title'>{movie.Title}</p>
            <p className=''></p>
            <p className='card-text'>Movie Released on {movie.Released}</p>
            <p className='card-text'>Genre : {movie.Genre}</p>
            <p className='card-text'>IMDB Rating : {movie.imdbRating}</p>
            <p className='card-text'>Language : {movie.Language}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MoviePage