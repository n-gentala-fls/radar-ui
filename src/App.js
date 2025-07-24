import React from 'react';
import './App.css';
import Radar from './components/Radar'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/radar/*" exact element={<Radar />} />
        <Route path="/" exact element={<Navigate to="/radar" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
