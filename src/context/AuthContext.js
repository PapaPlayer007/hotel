import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../data/users.json'; // Import the JSON file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [users, setUsers] = useState(usersData);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      if (foundUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const register = (newUser) => {
    setUsers([...users, newUser]);
    setUser(newUser);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
