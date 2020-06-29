import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectUsers = createSelector([selectUser], user => user.users);

export const selectUsersForPreview = createSelector([selectUsers], users =>
  users ? Object.keys(users).map(key => users[key]) : []
);

export const selectIsUsersFetching = createSelector(
  [selectUser],
  user => user.isFetching
);

export const selectIsUsersLoaded = createSelector(
  [selectUser],
  user => !!user.users
);
