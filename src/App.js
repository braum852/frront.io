import React, { useEffect, useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router"
import Signup from "./components/Sign/Signup"
import Itinerary from "./components/Itinerary"
import Expenses from "./components/Expenses"
import Footer from './components/Footer';
import Login from './components/Sign/Login'
import axios from "axios";
// import { AuthContext } from "./context/auth";
// import PrivateRoute from './PrivateRoute';

export default function App() {
  // const [authTokens, setAuthTokens] = useState();
  
  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // }

  // this.state = {
  //   loggedInStatus: "NOT_LOGGED_IN",
  //   user: {}
  // };

  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  function checkLoginStatus () {
    axios
    .get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if (
        response.data.logged_in &&
        this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        });
      } else if (
        !response.data.logged_in &
        (this.state.loggedInStatus === "LOGGED_IN")
      ) {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    })
    .catch(error => {
      console.log("check login error", error);
    });
  }

  //Fires on component mounted and component update
  useEffect(() => {
    checkLoginStatus();
  })

  
  return (
    <div className="App">
       <div id="page-container">
          <div id="content-wrap">
            <ResponsiveAppBar />
            {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
              <Routes>
                <Route path='/' element={<Signup/>}/>
                    <Route path='Home' element={<Signup/>}/>
                    <Route path='Itinerary' element={<Itinerary/>}/>
                    <Route path='Expenses' element={<Expenses/>}/>
                    <Route path='Login' element={<Login/>}/>
                </Routes>
                {/* </AuthContext.Provider> */}
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
