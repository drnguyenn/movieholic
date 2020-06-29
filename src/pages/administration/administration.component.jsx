import React from 'react';

import MovieReviewsOverviewSection from '../../components/movie-reviews-overview-section/movie-reviews-overview-section.component';
import UserManagementSection from '../../components/user-management-section/user-management-section.component';

import { AdministrationPageContainer } from './administration.styles';

const AdministrationPage = () => (
  <AdministrationPageContainer>
    <MovieReviewsOverviewSection />
    <UserManagementSection />
  </AdministrationPageContainer>
);

export default AdministrationPage;
