import React from 'react';
import { connect } from 'react-redux';

import { selectOneMovie } from '../../redux/movie/movie.selectors';
import { selectMovieId } from '../../redux/review/review.selectors';

import {
  MovieReviewsDetailsContainer,
  MovieReviewsDetailsItem,
  MovieReviewsDetailsValue,
  MovieReviewsDetailsTitle
} from './movie-reviews-details.styles';

const MovieReviewsDetails = ({ movie, fetchedMovieId }) => {
  const movieToShow = movie(fetchedMovieId);

  const { vote_average, vote_count } = movieToShow;

  return (
    <MovieReviewsDetailsContainer>
      <MovieReviewsDetailsItem>
        <MovieReviewsDetailsValue>{vote_average}</MovieReviewsDetailsValue>
        <MovieReviewsDetailsTitle>Average rating</MovieReviewsDetailsTitle>
      </MovieReviewsDetailsItem>
      <MovieReviewsDetailsItem>
        <MovieReviewsDetailsValue>{vote_count}</MovieReviewsDetailsValue>
        <MovieReviewsDetailsTitle>
          Users have rated this movie
        </MovieReviewsDetailsTitle>
      </MovieReviewsDetailsItem>
    </MovieReviewsDetailsContainer>
  );
};

const mapStateToProps = state => ({
  movie: movieId => selectOneMovie(movieId)(state),
  fetchedMovieId: selectMovieId(state)
});

export default connect(mapStateToProps)(MovieReviewsDetails);
