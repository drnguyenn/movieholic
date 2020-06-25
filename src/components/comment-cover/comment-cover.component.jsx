import React, { useState } from 'react';

import {
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { CommentCoverContainer } from './comment-cover.styles';

const CommentCover = () => {
  const [isShowed, setIsShowed] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <CommentCoverContainer isShowed={isShowed}>
      This review content is hidden because the author marked it as a spoiler
      <IconButton
        onClick={() => (isShowed ? setIsShowed(false) : setIsOpened(true))}
      >
        {isShowed ? (
          <Visibility />
        ) : (
          <VisibilityOff style={{ color: 'white' }} />
        )}
      </IconButton>
      <Dialog open={isOpened} onClose={() => setIsOpened(false)}>
        <DialogTitle>Show spoiler review</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            If you have not seen the movie yet, this may affect your experience.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpened(false)} autoFocus>
            CANCEL
          </Button>
          <Button
            onClick={() => {
              setIsShowed(true);
              setIsOpened(false);
            }}
            color='secondary'
            variant='contained'
            disableElevation
          >
            SHOW ANYWAY
          </Button>
        </DialogActions>
      </Dialog>
    </CommentCoverContainer>
  );
};

export default CommentCover;
