import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import RegisteredUsersList from "./Components/RegisteredUsersList";
import UserProfile from "./Components/UserProfile";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    return savedUsers;
    
  });

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }, [users]);

  return (
    <>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <RegistrationForm setUsers={setUsers} users={users} />
                {users.length > 0 ? (
                  <RegisteredUsersList
                    users={users}
                  />
                ) : (
                  <p>No users registered yet.</p>
                )}
              </div>
            }
          />
          <Route
            path="/profile/:userId"
            element={<UserProfile users={users} />}
          />
        </Routes>
    </>
  );
}

export default App;
