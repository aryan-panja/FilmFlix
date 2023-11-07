import React, { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movie } = useContext(AppContext)
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">

          {movie.map((currMovie) => {
            return (
              <NavLink to={`movie/${currMovie.imdbID}`} key={currMovie.imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{currMovie.Title}</h2>
                    <img src={currMovie.Poster} alt={currMovie.imdbID} />
                  </div>
                </div>
              </NavLink>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default Movies