import React from 'react';

import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import {
  MovieManagementSectionContainer,
  MovieManagementSectionTitle
} from './movie-management-section.styles';

const MovieManagementSection = () => {
  return (
    <MovieManagementSectionContainer>
      <MovieManagementSectionTitle>
        Movie Management
      </MovieManagementSectionTitle>
      <Fab size='medium' variant='extended' color='primary'>
        <Add />
        NEW MOVIE
      </Fab>
    </MovieManagementSectionContainer>
  );
};

export default MovieManagementSection;
