import React from 'react';

const MovieCard = ({ movie: { id, release_date, poster_path, title, vote_average } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{release_date.split("-")[0]}</p>
      </div>

      <div>
        <img src={poster_path!== "N/A" ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/400"} alt={title} />
      </div>

      <div>
        <span><h4>{vote_average}/10</h4></span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;