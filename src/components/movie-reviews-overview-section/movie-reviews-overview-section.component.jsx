import React from 'react';

import MovieReviewsChartContainer from '../movie-reviews-chart/movie-reviews-chart.container';
import MovieReviewsDetailsContainer from '../movie-reviews-details/movie-reviews-details.container';

import {
  MovieReviewsOverviewSectionContainer,
  Title,
  MovieReviewsChartAndDetails
} from './movie-reviews-overview-section.styles';

const MovieReviewsOverviewSection = () => (
  <MovieReviewsOverviewSectionContainer>
    <Title>Movie Ratings Overview</Title>
    <MovieReviewsChartAndDetails>
      <MovieReviewsChartContainer />
      <MovieReviewsDetailsContainer />
    </MovieReviewsChartAndDetails>
  </MovieReviewsOverviewSectionContainer>
);

export default MovieReviewsOverviewSection;
