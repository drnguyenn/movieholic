import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  users: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        errorMessage: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.UPDATE_PROFILE_FAILURE:
    case UserActionTypes.UPLOAD_AVATAR_FAILURE:
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
