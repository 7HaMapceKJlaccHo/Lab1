import React, { useState, useEffect } from "react";

const userInitial = [
  { username: "admin", password: "admin" },
  { username: "testadmin", password: "admintest" },
  { username: "user", password: "password" },
];

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(userInitial);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers([...users, ...JSON.parse(storedUsers)]);
    }
  }, [users]);

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert("Welcome, Milord");
    } else {
      alert("Who are you?");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    alert("Goodbye");
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    );
  };

  const renderLogoutButton = () => {
    const storedUser = localStorage.getItem("user");
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
    return (
      <div>
        {loggedInUser && <p>User : {loggedInUser.username}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  return (
    <div>{isAuthenticated ? renderLogoutButton() : renderLoginForm()}</div>
  );
};
