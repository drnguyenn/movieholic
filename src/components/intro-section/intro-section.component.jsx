import React from 'react';
import BackgroundImage from '../../assets/images/intro-section.jpg';

import {
  IntroSectionContainer,
  Background,
  Content,
  Title,
  SubTitle
} from './intro-section.styles';

const IntroSection = () => (
  <IntroSectionContainer>
    <Background backgroundUrl={BackgroundImage} />
    <Content>
      <Title>Welcome, movie lovers.</Title>
      <SubTitle>You're going to the right place.</SubTitle>
    </Content>
  </IntroSectionContainer>
);

export default IntroSection;
