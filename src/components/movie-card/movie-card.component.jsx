import React from 'react';
import { useHistory } from 'react-router-dom';

import { baseUrl } from '../../data/movie.urls';

import { Star } from '@material-ui/icons';

import {
  MovieCardContainer,
  Poster,
  AdditionalInfo,
  Footer
} from './movie-card.styles';

const MovieCard = ({ id, poster_path, vote_average, title }) => {
  const history = useHistory();

  const posterSize = '/w300'; // 300px

  return (
    <MovieCardContainer onClick={() => history.push(`/movies/${id}`)}>
      <Poster
        className='image'
        posterUrl={`${baseUrl}${posterSize}${poster_path}`}
      />
      <AdditionalInfo className='ratings'>
        <Star style={{ color: 'yellow', fontSize: '1.2em', paddingRight: 5 }} />{' '}
        {vote_average}
      </AdditionalInfo>
      <Footer>{title}</Footer>
    </MovieCardContainer>
  );
};

export default MovieCard;
