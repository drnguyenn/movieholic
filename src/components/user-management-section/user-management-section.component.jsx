import React from 'react';

import UserListContainer from '../user-list/user-list.container';

import {
  UserManagementSectionContainer,
  UserManagementSectionTitle
} from './user-management-section.styles';

const UserManagementSection = () => (
  <UserManagementSectionContainer>
    <UserManagementSectionTitle>User Management</UserManagementSectionTitle>
    <UserListContainer />
  </UserManagementSectionContainer>
);

export default UserManagementSection;
