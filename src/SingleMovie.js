import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import useFetch from './useFetch';


const SingleMovie = () => {
  const { id } = useParams();
  const fetchResult = useFetch(`&i=${id}`);

  if (!fetchResult) {
    return (
      <section className='movie-section'>
        <div className="loading">Loading..</div>
      </section>
    );
  }

  const { isLoading, movie, isError } = fetchResult;

  if (isLoading) {
    return (
      <section className='movie-section'>
        <div className="loading">Loading..</div>
      </section>
    );
  }

  if (isError && isError.show) {
    return (
      <section className='movie-section'>
        <div className="error">{isError.msg}</div>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img className='img' src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="Stitle">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="backbtn">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
}


export default SingleMovie
