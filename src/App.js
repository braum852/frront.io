import React from "react";
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import { Route, Routes } from "react-router"
import Signup from "./components/Loggin/Signup"
import Itinerary from "./components/Itinerary"
import Expenses from "./components/Expenses"
import Footer from './components/Footer';
import Login from './components/Loggin/Login'
// import { AuthContext } from "./context/auth";
// import PrivateRoute from './PrivateRoute';

function App() {
  // const [authTokens, setAuthTokens] = useState();
  
  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // }
  
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

export default App;
