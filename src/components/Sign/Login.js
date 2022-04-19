import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  function loginUser(event) {
    event.preventDefault();
    event.target.reset();

    let user = {
      username,
      password
    };

    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username: user.username,
                password: user.password
            }
        },
        { withCredentials: true })
    })
    // .then(response => {
    //   if (response.data.logged_in) {
    //     this.props.handleSuccessfulAuth(response.data);
    //   }
    // })
    .catch(error => {
      console.log("login error", error);
    });
  event.preventDefault();
}

  return (
        <div>
          <br></br>
          <br></br>
          <div className="loginHeader">
            <h1 className='loginFancy'>Welcome back!</h1>
          </div>
          <div>
          <p className='fanc1'><i>"Travel as far as much as you can, as far as you can, as long as you can. Life's not meant to be lived on one place"</i></p>

          </div>
          <br />
          <form className={classes.root} onSubmit={loginUser}>
            <TextField
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div>
              <Button variant="contained">
                Cancel
                  </Button>
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </div>
          </form>
      <br />
      <br />
    </div>
  );
}

// import { Component } from 'react';
// import SignIn from './New/SignIn';
// import './New/SignIn.css'

// export default class Sign extends Component {

//   state = {
//     user: {}, 
//     error: "",
//   }

//   signIn = (user) => {
//     fetch("http://localhost:3000/api/v1/login", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             user: {
//                 username: user.username,
//                 password: user.password
//             }
//         })
//     })
//     console.log(user.username, user.password)
//     .then(response => response.json())
//     .then(result => {
//         if (result.token){
//         localStorage.setItem('token', result.token)
//         this.setState({
//             user: result.user
//             })
//         }
//         else {
//             this.setState({
//                 error: result.error
//             })
//         }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <br></br>  
//           <SignIn signIn={this.signIn} error={this.state.error} />
//       </div>
//     );
//   } 
// }