import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Sign/Signup"
import Itinerary from "./components/Itinerary"
import Expenses from "./components/Expenses"
import Footer from './components/Footer';
import Title from './components/Title'

export default function App() {

  
  return (
    <div className="App">
       <div id="page-container">
          <div id="content-wrap">
        <ResponsiveAppBar />
          {/* <Router>
           <Fragment> */}
              <Routes>
                <Route path={'/'} element={<Signup/>}/>
                    <Route path='Home' element={<Signup/>}/>
                    <Route path='Itinerary' element={<Itinerary/>}/>
                    <Route path='Expenses' element={<Expenses/>}/>
                    <Route path='SignUp' element={<Signup/>}/>
                    <Route path='Testing' element={<Title/>}/>
                </Routes>
                {/* </Fragment>
              </Router> */}
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
