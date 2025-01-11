const movies = require('../data/moviesData');
const getMovies = (req, res) => {
  res.json(movies);
};

const getMovieById = (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
};

const addMovie = (req, res) => {
  const { title, genre, releaseYear, rating } = req.body;
  const newMovie = {
    id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1,
    title,
    genre,
    releaseYear,
    rating,
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};
const updateMovieRating = (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  movie.rating = req.body.rating;
  res.json(movie);
};
const deleteMovie = (req, res) => {
  const index = movies.findIndex((m) => m.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  const deletedMovie = movies.splice(index, 1);
  res.json(deletedMovie);
};

module.exports = { getMovies, getMovieById, addMovie, updateMovieRating, deleteMovie };
