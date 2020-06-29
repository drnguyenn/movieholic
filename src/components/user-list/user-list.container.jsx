import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsUsersFetching } from '../../redux/user/user.selectors';

import UserList from './user-list.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUsersFetching
});

const UserListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UserList);

export default UserListContainer;
