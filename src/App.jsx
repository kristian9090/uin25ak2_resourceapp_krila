import React from 'react';
// måtte laste ned BrowserRouter for å bruke Routes og Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ellers importerer de andre nødvendige komponentene
import Layout from './components/Layout';
import Nav from './components/Nav';
import Resources from './components/Resources';
import './App.css';
import './styles/style.scss';
import { resources } from './resources/ressurser.js';
import './styles/nav.scss';
import './styles/resources.scss';
import './styles/pageTitle.scss';
import './styles/layout.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* router/henter kategorier fra ressurser.js og mapper ut den som hører til i Resources.jsx */}
          <Route path="/html" element={<Layout category="html"><Resources category="html" /></Layout>} />
          <Route path="/css" element={<Layout category="css"><Resources category="css" /></Layout>} />
          <Route path="/javascript" element={<Layout category="javascript"><Resources category="javascript" /></Layout>} />
          <Route path="/react" element={<Layout category="react"><Resources category="react" /></Layout>} />
          <Route path="/headless-cms" element={<Layout category="headless-cms"><Resources category="headless-cms" /></Layout>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;