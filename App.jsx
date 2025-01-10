// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminDashboard from './components/AdminDashboard';
import Users from './components/Users';
import Products from './components/Products';
import Settings from './components/Settings';
import LoginForm from './components/LoginForm';

import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="admin-panel">
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginForm />} />

          {/* Admin Panel Routes */}
          <Route
            path="/admin"
            element={
              <div className="admin-container">
                <Sidebar />
                <div className="main-content">
                  <AdminDashboard />
                </div>
              </div>
            }
          />
          <Route
            path="/users"
            element={
              <div className="admin-container">
                <Sidebar />
                <div className="main-content">
                  <Users />
                </div>
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="admin-container">
                <Sidebar />
                <div className="main-content">
                  <Products />
                </div>
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="admin-container">
                <Sidebar />
                <div className="main-content">
                  <Settings />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
