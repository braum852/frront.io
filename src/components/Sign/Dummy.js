// // Context Api - /context/auth

// // import React from "react";
// // import { useHistory } from "react-router-dom"
// // const UserContext = React.createContext();

// // function getUserFromLocalStorage() {
// //     return localStorage.getItem("authToken")
// //       ? JSON.parse(localStorage.getItem("authToken"))
// //       : { username: null, token: null };
// //   }

// // function UserProvider({ children }) {
// //   const [user, setUser] = React.useState(getUserFromLocalStorage());
// //   const history = useHistory()
// //   const logoutHandler = () =>{
// //     localStorage.removeItem("authToken");
// //     setUser(user);
// //     history.push("/")
// //   }
// //   return (
// //     <UserContext.Provider
// //       value={{ user, setUser, logoutHandler  }}
// //     >
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }

// // export { UserContext, UserProvider };


// // Login Link

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { UserContext } from "../../context/user";
// // import { useHistory } from "react-router-dom"
// // export default function LoginLink() {

// //   const { user, logoutHandler } = React.useContext(UserContext);

// //   if (user.authToken) {
// //     return (
// //       <button
// //         onClick={() => {
// //           logoutHandler();
// //         }}
// //         className="login-btn"
// //       >
// //         logout
// //       </button>
// //     );
// //   }
// //   return <Link to="/login">login</Link>;

// Header

// import React from 'react';
// import { Link, useHistory } from "react-router-dom";
// import Search from './Search';
// import './Header.css'
// import SearchBooks from './SearchBooks';
// import LoginLink from '../Signin/LoginLink';
// import CartLink from '../Cart/CartLink';
// import { UserContext } from '../../context/user';

// const Header = () => {
// const { user } = React.useContext(UserContext);

//     return (
//         <div className='header__container'>
//             <Link to='/'>
//             <img src='/audi.png' />
//             </Link>  
//             <li>
//               <LoginLink />
//             </li>
//            {user.authToken &&(
//             <CartLink /> 
//            )    
//            }      
//         </div>
//     )
// }

// export default Header

// Login

// import { useState, } from "react";
// import { useHistory } from "react-router-dom"
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./Signin.css";

// const Login = () => {
//   const { user, setUser } = React.useContext(UserContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const history = useHistory()

  
//   const loginHandler = async (e) => {
//     e.preventDefault();
//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         config
//       );

//       localStorage.setItem("authToken", data.token);
//       setUser(user)
//       history.push("/");
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.error);
//       }
//       setTimeout(() => {
//          setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <div className="login-screen">
//       <form onSubmit={loginHandler} className="login-screen__form">
//         <h3 className="login-screen__title">Login</h3>
//         {error && <span className="error-message">{error}</span>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             required
//             id="email"
//             placeholder="Email address"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             tabIndex={1}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">
//             Password:{" "}
//             <Link to="/forgotpassword" className="login-screen__forgotpassword">
//               Forgot Password?
//             </Link>
//           </label>
//           <input
//             type="password"
//             required
//             id="password"
//             autoComplete="true"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             tabIndex={2}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>

//         <span className="login-screen__subtext">
//           Don't have an account? <Link to="/register">Register</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Login;