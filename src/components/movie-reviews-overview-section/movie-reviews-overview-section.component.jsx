import React from 'react';

import MovieReviewsChartContainer from '../movie-reviews-chart/movie-reviews-chart.container';
import MovieReviewsDetailsContainer from '../movie-reviews-details/movie-reviews-details.container';

import {
  MovieReviewsOverviewSectionContainer,
  MovieReviewsOverviewSectionTitle,
  MovieReviewsChartAndDetails
} from './movie-reviews-overview-section.styles';

const MovieReviewsOverviewSection = () => (
  <MovieReviewsOverviewSectionContainer>
    <MovieReviewsOverviewSectionTitle>
      Movie Ratings Overview
    </MovieReviewsOverviewSectionTitle>
    <MovieReviewsChartAndDetails>
      <MovieReviewsChartContainer />
      <MovieReviewsDetailsContainer />
    </MovieReviewsChartAndDetails>
  </MovieReviewsOverviewSectionContainer>
);

export default MovieReviewsOverviewSection;
