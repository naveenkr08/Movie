import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from './context';

function SingleMovie() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === 'True') {
        setMovie(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovie(`${API_URL}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="card-content">
          <p className='title'>{movie.Title}</p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating} / 10</p>
          <p className='card-text'>{movie.Country}</p>
          <NavLink to="/">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
}

export default SingleMovie;
