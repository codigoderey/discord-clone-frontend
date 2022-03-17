import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
