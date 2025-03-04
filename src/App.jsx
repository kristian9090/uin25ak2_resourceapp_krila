import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Nav from './components/Nav'
import './App.css'
import "./styles/style.scss"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </Layout>
  );
}

export default App;
