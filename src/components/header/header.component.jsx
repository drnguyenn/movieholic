import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SearchBox from '../search-box/search-box.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import AvatarDropdown from '../avatar-dropdown/avatar-dropdown.component';

import { IconButton } from '@material-ui/core';
import { Assessment } from '@material-ui/icons';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser }) => {
  const history = useHistory();

  return (
    <HeaderContainer className='header'>
      <LogoContainer to='/'>
        <Logo style={{ width: 150, height: 'auto' }} />
      </LogoContainer>
      <SearchBox />
      <OptionsContainer>
        {currentUser ? (
          currentUser.isAdmin ? (
            <IconButton onClick={() => history.push('/administration')}>
              <Assessment style={{ fontSize: 27 }} />
            </IconButton>
          ) : null
        ) : null}
        {currentUser ? (
          <AvatarDropdown />
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
