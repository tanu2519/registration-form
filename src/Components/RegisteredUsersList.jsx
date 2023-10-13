import React from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/RegisteredUsersList.css";

const RegisteredUsersList = ({ users }) => {
  return (
    <div className="registered-users">
      <h2>Registered Users for the Event</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div className="myUsers">
              <span>{user.name.slice(0, 20)}</span>
              <span>{user.timestamp.slice(0, 10)}</span>
              <Link to={`/profile/${index}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredUsersList;
