import React from 'react';
import UserContext from '../Context/userContext';

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-700">Please login first</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Profile</h2>
        <p className="text-lg text-gray-800">Username: <span className="font-medium">{user.username}</span></p>
      </div>
    </div>
  );
}

export default Profile;
