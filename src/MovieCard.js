import React from 'react';

const MovieCard = ({ movie }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '12px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  };

  const ratingStyle = {
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#555',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div className="movie-card" style={cardStyle}>
      {/* <img src={movie.image} alt={movie.movie} style={imageStyle} /> */}
      {/* <img src={movie.image} alt={movie.movie + ' poster'} style={imageStyle} onError={(e) => { e.target.src = 'fallback-image.jpg'; }} /> */}
      <h2 style={titleStyle}>{movie.movie}</h2>
      <p style={ratingStyle}>Rating: {movie.rating}</p>
      <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        IMDb Link
      </a>
    </div>
  );
};

export default MovieCard;
