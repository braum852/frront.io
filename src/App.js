import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='Home' component={<Home/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
