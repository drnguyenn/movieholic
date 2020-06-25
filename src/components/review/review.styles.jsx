import styled from 'styled-components';

export const ReviewContainer = styled.div`
  width: 90%;
  min-height: 170px;
  max-height: 400px;
  margin-bottom: 15px;
  border: solid darkgray 1px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const ReviewHeader = styled.div`
  height: 60px;
  border-bottom: solid darkgray 1px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarAndAuthorAndPostedTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 3.5em;
  border-radius: 50%;
`;

export const AuthorAndPostedTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

export const Author = styled.span`
  color: #4d4d4d;
  font-size: larger;
  font-weight: bold;
`;

export const PostedTime = styled.span`
  font-size: small;
  color: gray;
`;

export const ReviewOptions = styled.div``;

export const CoverAndContent = styled.div`
  position: relative;
  padding-top: 2%;
  width: 100%;
  height: 100%;
  min-height: 110px;
`;

export const ReviewContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Rating = styled.div`
  width: 15%;
  font-size: 18px;
  font-weight: bold;
  color: #4d4d4d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Comment = styled.div`
  width: 85%;
  max-height: 332px;
  font-weight: lighter;
  line-height: 1.5;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: break-spaces;
  overflow-wrap: anywhere;
`;
