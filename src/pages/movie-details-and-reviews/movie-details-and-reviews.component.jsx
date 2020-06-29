import React from 'react';

import MovieDetailsSection from '../../components/movie-details-section/movie-details-section.component';
import MovieReviewsSection from '../../components/movie-reviews-section/movie-reviews-section.component';

import { MovieDetailsAndReviewsPageContainer } from './movie-details-and-reviews.styles';

import './movie-details-and-reviews.styles.jsx';

const MovieDetailsAndReviewsPage = () => {
  return (
    <MovieDetailsAndReviewsPageContainer>
      <MovieDetailsSection />
      <MovieReviewsSection />
    </MovieDetailsAndReviewsPageContainer>
  );
};

export default MovieDetailsAndReviewsPage;
