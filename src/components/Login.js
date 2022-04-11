import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    size: 'large',

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    handleClose();
  };

  // login = () => {
  //   fetch("http://localhost:3000/api/v1/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(this.state)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error("Invalid Login");
  //       }
  //     })
  //     .then(data => {
  //       localStorage.setItem("accessToken", data.jwt);
  //       localStorage.setItem("user_id", data.user.id);
  //       localStorage.setItem("username", data.user.username);
  //       this.props.history.push("/trips");
  //     })
  //     .catch(error => {
  //       alert("Invalid Login", error);
  //     });
  // };

  return (
    <div>
      <br></br>
    <Typography variant="h3" color="black">Welcome!</Typography>
    <form className={classes.root} onSubmit={handleSubmit}>
      <legend><h1>Enter your details below</h1></legend>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
    </div>
  );
};

export default Form;