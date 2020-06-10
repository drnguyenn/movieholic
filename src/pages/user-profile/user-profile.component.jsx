import React from 'react';

import ProfileInputForm from '../../components/profile-input-form/profile-input-form.component';
import './user-profile.styles.scss';

const UserProfilePage = ({ currentUser}) => (
 <div>	
    <h1>User Profile Page</h1>
    <ProfileInputForm />
 </div>

)
export default UserProfilePage;


