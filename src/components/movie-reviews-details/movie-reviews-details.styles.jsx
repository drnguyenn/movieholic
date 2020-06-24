import styled from 'styled-components';

export const MovieReviewsDetailsContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MovieReviewsDetailsItem = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  border: solid 1px lightgray;
`;

export const MovieReviewsDetailsValue = styled.div`
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  position: relative;
  width: 25%;
  margin: 2%;
  border: solid 7px lightgreen;
  border-radius: 50%;
  color: dimgray;
  font-size: x-large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieReviewsDetailsTitle = styled.span`
  width: 60%;
  color: #4d4d4d;
  font-weight: 400;
  font-size: 1.2em;
`;
