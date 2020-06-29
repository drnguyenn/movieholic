import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  createReviewStart,
  updateReviewStart
} from '../../redux/review/review.actions';

import CustomButton from '../custom-button/custom-button.component';

import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { StarBorder } from '@material-ui/icons';

import {
  ReviewEditorContainer,
  CommentBox,
  OptionBar,
  CheckboxAndRating,
  RatingAndLabel,
  Label
} from './review-editor.styles';

const ReviewEditor = ({
  isEditing,
  onFinish,
  createReviewStart,
  updateReviewStart,
  currentUser,
  currentUsersReview,
  width
}) => {
  const [hover, setHover] = useState(-1);

  const [review, setReview] = useState({
    comment: currentUsersReview ? currentUsersReview.comment : '',
    rating: currentUsersReview ? currentUsersReview.rating : 10,
    isSpoiler: currentUsersReview ? currentUsersReview.isSpoiler : false
  });

  const { comment, rating, isSpoiler } = review;

  const { movieId } = useParams();

  const handleChange = event => {
    const { name, value, checked } = event.target;
    setReview({
      ...review,
      [name]:
        name === 'rating'
          ? parseFloat(value)
          : name === 'isSpoiler'
          ? checked
          : value
    });
  };

  const handleSubmit = async event => {
    const { id: userId, displayName, photoURL } = currentUser;

    event.preventDefault();

    if (!isEditing)
      createReviewStart(
        movieId,
        {
          userId,
          comment,
          rating,
          isSpoiler
        },
        { displayName, photoURL }
      );
    else {
      updateReviewStart(
        movieId,
        {
          id: currentUsersReview.id,
          comment,
          rating,
          isSpoiler
        },
        userId === currentUsersReview.id
          ? { displayName, photoURL }
          : {
              displayName: currentUsersReview.displayName,
              photoURL: currentUsersReview.photoURL
            }
      );

      onFinish();
    }

    setReview({ ...review, comment: '', rating: 0, isSpoiler: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReviewEditorContainer width={width}>
        <CommentBox
          name='comment'
          value={comment}
          onChange={handleChange}
          placeholder='Leave a comment here...'
        />
        <OptionBar>
          <CheckboxAndRating>
            <RatingAndLabel>
              <Rating
                name='rating'
                value={rating}
                max={10}
                emptyIcon={<StarBorder fontSize='inherit' />}
                onChange={handleChange}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              <Label>{hover !== -1 ? hover : rating}</Label>
            </RatingAndLabel>
            <FormControlLabel
              style={{ margin: 0 }}
              control={
                <Checkbox
                  name='isSpoiler'
                  checked={isSpoiler}
                  onChange={handleChange}
                  size='small'
                />
              }
              label='This comment is a spoiler'
            />
          </CheckboxAndRating>
          <CustomButton>Post</CustomButton>
        </OptionBar>
      </ReviewEditorContainer>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  createReviewStart: (movieId, review, user) =>
    dispatch(createReviewStart(movieId, review, user)),
  updateReviewStart: (movieId, review, user) =>
    dispatch(updateReviewStart(movieId, review, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditor);
