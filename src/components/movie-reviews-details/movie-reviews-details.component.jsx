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

const MovieReviewsDetails = ({ fetchedMovieId, movie }) => {
  const { vote_average, vote_count } = movie(fetchedMovieId);

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
  fetchedMovieId: selectMovieId(state),
  movie: movieId => selectOneMovie(movieId)(state)
});

export default connect(mapStateToProps)(MovieReviewsDetails);
