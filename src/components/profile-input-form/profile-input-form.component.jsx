import React, { useState } from 'react';

import firebase, {firestore} from "../../firebase/firebase.utils";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog, DialogActions, DialogTitle
} from '@material-ui/core';

import CustomButton from '../custom-button/custom-button.component';

import {
  ProfileInputFormContainer,
  ProfileInputFormTitle,
  FirstNameAndLastNameInput,
  AgeAndGenderInput,
  ButtonsGroupContainer
} from './profile-input-form.styles';

const ProfileInputForm = ({ currentUser }) => {
  const [userInfo, setUserInfo] = useState(currentUser);
  const [open, setOpen] = React.useState(false);

  const {
    displayName,
    firstName,
    lastName,
    phoneNumber,
    gender,
    age
  } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    const userID = firebase.auth().currentUser.uid;
    const userRef = firestore.doc(`users/${userID}`);
    userRef.update({
      displayName: displayName,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      age: age,
      gender: gender
    })

    currentUser.displayName = displayName;
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.phoneNumber = phoneNumber;
    currentUser.age = age;
    currentUser.gender = gender;

  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ProfileInputFormContainer>
      <ProfileInputFormTitle>Profile</ProfileInputFormTitle>
      <form onSubmit={handleSubmit}>
        <TextField
          name='email'
          type='email'
          value={currentUser.email}
          onChange={handleChange}
          label='Email'
          margin='normal'
          fullWidth
          disabled
        />
        <TextField
          required
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          label='Display name'
          margin='normal'
          fullWidth
        />
        <FirstNameAndLastNameInput>
          <TextField
            name='firstName'
            type='text'
            value={firstName}
            onChange={handleChange}
            label='First name'
            margin='normal'
          />
          <TextField
            name='lastName'
            type='text'
            value={lastName}
            onChange={handleChange}
            label='Last name'
            margin='normal'
          />
        </FirstNameAndLastNameInput>

        <TextField
          name='phoneNumber'
          type='text'
          value={phoneNumber}
          onChange={handleChange}
          label='Phone number'
          margin='normal'
        />
        <AgeAndGenderInput>
          <TextField
            name='age'
            type='number'
            value={age}
            onChange={handleChange}
            label='Age'
            margin='normal'
          />
          <FormControl margin='normal' style={{ minWidth: 120 }}>
            <InputLabel>Gender</InputLabel>
            <Select name='gender' value={gender} onChange={handleChange}>
              <MenuItem value={''}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </AgeAndGenderInput>
        <ButtonsGroupContainer>
          <CustomButton onClick={handleClickOpen}>SAVE </CustomButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle >{"Update profile successfully!"}</DialogTitle>
            <DialogActions>           
              <CustomButton onClick={handleClose}>Agree </CustomButton>            
            </DialogActions>
          </Dialog>
        </ButtonsGroupContainer>
      </form>
    </ProfileInputFormContainer>
  );
};

export default ProfileInputForm;
