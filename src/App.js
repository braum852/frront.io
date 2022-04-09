import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router"
import Title from "./components/Title"
import Itinerary from "./components/Itinerary"
import Expenses from "./components/Expenses"
import Login from "./components/Login"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Title/>}/>
          <Route path='Itinerary' element={<Itinerary/>}/>
          <Route path='Expenses' element={<Expenses/>}/>
          <Route path='Login' element={<Login/>}/>
      </Routes>
      <header className="App-header">
      </header>
      <Footer/>
    </div>
  );
}

export default App;
