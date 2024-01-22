import React, { useContext, useState } from 'react';
import './UserProfile.css'

import useAuth from '../../Hook/useAuth';
const UserProfile = () => {
    const { user, updateUser } = useAuth();
  const [newDisplayName, setNewDisplayName] = useState('');

  const handleUpdateProfile = () => {
    // You can update any profile information you need, such as displayName or photoURL
    updateUser({
      displayName: newDisplayName,
      // other fields you want to update
    })
      .then((updatedUser) => {
        console.log('Profile updated successfully:', updatedUser);
        // Optionally, you can set any local state or trigger other actions after updating the profile
      })
      .catch((error) => {
        console.error('Error updating profile:', error.message);
        // Handle error or provide feedback to the user
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
         
         
         <h1>Name: {user.displayName}</h1>
          <h1>Email: {user.email}</h1>
          
          
       
          
          
          {/* Display user's current photo */}
          <img id='updateprofile' src={user.photoURL}  alt="User" />
          {/* {user.photoURL && <img id='updateprofile' src={user.photoURL} alt="User" />} */}
          {/* <input className='mt-4'
            type="text"
            placeholder="New Display Name"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <button className='mt-4' onClick={handleUpdateProfile}>Update Profile</button> */}
        </>
      )}
    </div>
  );
};

export default UserProfile;