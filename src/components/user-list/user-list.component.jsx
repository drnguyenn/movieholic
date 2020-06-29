import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectIsUsersLoaded,
  selectUsersForPreview
} from '../../redux/user/user.selectors';
import { fetchUsersStart } from '../../redux/user/user.actions';

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import { UserListContainer } from './user-list.styles';

const UserList = ({ isLoaded, users, fetchUsersStart }) => {
  useEffect(() => {
    if (!isLoaded) fetchUsersStart();
  });

  return (
    <UserListContainer>
      <TableContainer component={Paper} style={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Display name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ id, email, displayName, age, gender }) => (
              <TableRow key={id}>
                <TableCell>{email}</TableCell>
                <TableCell>{displayName}</TableCell>
                <TableCell>{age}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell component='th' scope='user'>
                  {id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </UserListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsUsersLoaded,
  users: selectUsersForPreview
});

const mapDispatchToProps = dispatch => ({
  fetchUsersStart: () => dispatch(fetchUsersStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
