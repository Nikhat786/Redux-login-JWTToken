
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
// import './App.css';

function App() {
  return (
    <div className="wrapper">
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
     </Router>
    
    </div>
  );
}

export default App;