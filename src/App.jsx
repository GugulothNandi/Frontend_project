// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import ProfileScreen from "./components/ProfileScreen";
import "./App.css";

function App() {
  // A simple state to simulate authentication (true for Profile, false otherwise)
  const isAuthenticated = true; // In a real app, this would come from an auth context

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Landing/Home Screen */}
          <Route path="/" element={<LandingScreen />} />

          {/* Authentication Screens */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />

          {/* Protected Profile Screen */}
          <Route
            path="/profile"
            element={
              isAuthenticated ? <ProfileScreen /> : <Navigate to="/login" />
            }
          />

          {/* Fallback/404 Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
