import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  width: 20vw;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    .image {
      opacity: 0.85;
    }

    .ratings {
      display: flex;
      color: white;
    }
  }
`;

export const Poster = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ posterUrl }) => posterUrl});
`;

export const AdditionalInfo = styled.div`
  display: none;
  width: 100%;
  height: 20%;
  top: 270px;
  border-radius: 0px 0 10px 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1.35em;
  font-weight: bold;
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  padding-top: 5%;
  display: flex;
  font-size: 18px;
  font-weight: lighter;
  overflow: hidden;
`;
