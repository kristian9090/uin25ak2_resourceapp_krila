import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Nav from './components/Nav'
import './App.css'
import "./style/style.scss"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Nav />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
