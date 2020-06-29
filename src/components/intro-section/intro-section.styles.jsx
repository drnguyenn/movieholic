import styled from 'styled-components';

export const IntroSectionContainer = styled.div`
  width: 100%;
  height: 40vw;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: xxx-large;
  color: white;
  padding-bottom: 30px;
`;

export const SubTitle = styled.span`
  font-size: xx-large;
  color: white;
`;
