
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';
import Login from './Pages/Login'
import Header from './_layout/Header';
import Manage from './components/Manage';

function App() {
  return (
    
    <BrowserRouter>
     <Header></Header>
    <Routes>
         <Route path='/' element={ <Home/>} />
      {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
      <Route path='/create' element={ <Create/>} />
      <Route path='/manage' element={ <Manage/>} />
      <Route path='/edit/:id' element={ <Update/>} />
     </Routes>
    </BrowserRouter>
  
  );
}

export default App;
