const express = require('express');
const router = express.Router();
const {
  getMovies,
  getMovieById,
  addMovie,
  updateMovieRating,
  deleteMovie,
} = require('../controllers/moviesController');

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', addMovie);
router.patch('/:id', updateMovieRating);
router.delete('/:id', deleteMovie);

module.exports = router;
