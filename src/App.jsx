import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Nav from './components/Nav';
import Resources from './components/Resources';
import './App.css';
import './styles/style.scss';
import { resources } from './resources/ressurser.js';

function App() {

  const getUrl = async () => {
    if (resources.length > 0) {
      fetch(resources[0].url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Det skjedde en feil under lasting av data", error))
    }
  }
  

  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Nav resources={resources} />} />  
            <Route path="/html" element={<Resources category="html" />} />
            <Route path="/css" element={<Resources category="css" />} />
            <Route path="/javascript" element={<Resources category="javascript" />} />
            <Route path="/react" element={<Resources category="react" />} />
            <Route path="/sanity" element={<Resources category="sanity" />} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App; 