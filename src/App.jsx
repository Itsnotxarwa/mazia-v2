import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './homepage';
import Demo from './demo';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/demo' element={<Demo />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
