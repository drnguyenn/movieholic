import React from 'react';

import IntroSection from '../../components/intro-section/intro-section.component';
import MovieCardListContainer from '../../components/movie-card-list/movie-card-list.container';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <IntroSection />
      <MovieCardListContainer />
    </HomePageContainer>
  );
};

export default HomePage;
