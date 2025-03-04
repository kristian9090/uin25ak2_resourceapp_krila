import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Nav from './components/Nav';
import './App.css';
// import './styles/style.scss';
import { resources } from './resources/ressurser.js';

function App() {
  console.log(" resources:", resources); 
  return (
    <Router>
      <Layout>
      <Nav resources={resources} />
        <Routes>
        <Route path="/" element={<Nav />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;