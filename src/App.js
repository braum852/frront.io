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
       <div id="page-container">
          <div id="content-wrap">
            <ResponsiveAppBar />
              <Routes>
                <Route path='/' element={<Title/>}/>
                  <Route path='Itinerary' element={<Itinerary/>}/>
                    <Route path='Expenses' element={<Expenses/>}/>
                    <Route path='Login' element={<Login/>}/>
                    <Route exact path='Signup' element={<Title/>}/>
                </Routes>
              <header className="App-header">
              </header>
           </div>
              <div id='foot'>
                <Footer/>
              </div>
         </div>
    </div>
  );
}

export default App;
