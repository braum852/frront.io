import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router"
import Title from "./components/Title"
import Itinerary from "./components/Itinerary"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Title/>}/>
          <Route path='Itinerary' element={<Itinerary/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/>
          <Route path='Login' element={<Login/>}/>
      </Routes>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
