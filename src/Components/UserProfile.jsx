import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/Styles/UserProfile.css";
import { CgProfile } from 'react-icons/cg';

const UserProfile = ({ users }) => {
  const { userId } = useParams();
  const user = users[userId];

  if (!user) {
    return (
      <div className="user-profile">
        <p className="user-not-found">User not found</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <CgProfile className="icon" />
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Contact Number: {user.phone}</p>
      <p>Short Bio: {user.bio}</p>
      <p>Timestamp: {user.timestamp}</p>

      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default UserProfile;
