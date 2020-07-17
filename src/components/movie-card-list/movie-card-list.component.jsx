import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMoviesForPreview } from '../../redux/movie/movie.selectors';

import MovieCard from '../movie-card/movie-card.component';

import { MovieCardListContainer } from './movie-card-list.styles';

const MovieCardList = ({ movies }) => {
  return (
    <MovieCardListContainer className='movie-card-list'>
      {movies.map(({ id, ...otherProps }) => (
        <MovieCard key={id} id={id} {...otherProps} />
      ))}
    </MovieCardListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesForPreview
});

export default connect(mapStateToProps)(MovieCardList);
