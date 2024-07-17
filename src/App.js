// App.js

import React, { useState, useEffect } from 'react';
// import MovieList from './components/MovieList';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setMovies(data); // assuming data is structured as { data: [...] }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
