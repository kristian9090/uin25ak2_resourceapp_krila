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
      <Layout>
        <Routes>
            {/* sender med html når siden lastes */}
            <Route path="/" element={<Resources category="html" />} />
            {/* router til html når det er i parameteret  */}
            <Route path="/html" element={<Resources category="html" />} />
            <Route path="/css" element={<Resources category="css" />} />
            <Route path="/javascript" element={<Resources category="javascript" />} />
            <Route path="/react" element={<Resources category="react" />} />
            <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
  );
}

export default App;