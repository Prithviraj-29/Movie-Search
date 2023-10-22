import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
const Movies = () => {
  const { movie,isLoading } = useGlobalContext();

  if(isLoading){
    return (
      <div className='movie-section'>
        <div className="loadind">Loading...</div>
      </div>
    )
  }
  return (
    <>
    <section className='movie-page'>
      <div className='grid'>{movie.map((curMovie) => {
        const {imdbID,Title,Poster}=curMovie;
        let MovieName= Title.substring(0,20);
        if(MovieName.length==20){
          MovieName+='..'
        }
        return (
          <NavLink to={`movie/${imdbID}`}key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{MovieName}</h2>
                <img src={Poster} alt={imdbID} />
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
