import styled, { css } from 'styled-components';

const coverStyle = css`
  background-color: rgba(89, 86, 78, 0.97);
  color: white;
  font-weight: lighter;
`;

const getCoverStyle = ({ isShowed }) => (isShowed ? null : coverStyle);

export const CommentCoverContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: -2%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: transparent;

  ${getCoverStyle}
`;
