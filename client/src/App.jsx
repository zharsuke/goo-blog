import React, {useEffect, useState} from 'react';
import Index from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/auth/register" element={<Register />} /> 
          <Route path="/auth/login" element={<Login />} /> 
          <Route path="/" element={<IndexFunction />} />
        </Routes>
        
      </div>
    </Router>
  )
}

function IndexFunction() {
  const location = useLocation();
  if (location.pathname === "/auth/register" || location.pathname === "/auth/login") {
    return null;
  }

  return <Index />;
}

export default App;