import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HttpsRoundedIcon from "@material-ui/icons/HttpsRounded";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  itemStyle: {
    width: "25%",
  },
}));

function Signup() {
  const classes = useStyles();
  const [signupInfo, setSignupInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [contactError, setContactError] = useState("");

  const isValidForm = () => {
    let isValid = true;
    if (signupInfo.firstname === undefined || signupInfo.firstname === "") {
      setFirstnameError("Please enter firstname");
      isValid = false;
    }
    if (signupInfo.lastname === undefined || signupInfo.lastname === "") {
      setLastnameError("Please enter lastname");
      isValid = false;
    }
    if (signupInfo.email === undefined || signupInfo.email === "") {
      setEmailError("Enter a valid Email");
      isValid = false;
    }
    if (signupInfo.password === undefined || signupInfo.password === "") {
      setPasswordError("Please enter a password");
      isValid = false;
    }
    if (
      signupInfo.confirmPassword === undefined ||
      signupInfo.confirmPassword === ""
    ) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    }
    if (signupInfo.contact === undefined || signupInfo.contact === "") {
      setContactError("Please enter a contact number");
      isValid = false;
    }
    return isValid;
  };

  const isPasswordMatch = () => {
    if (signupInfo.password === signupInfo.confirmPassword) {
      return true;
    }
    return false;
  };

  const clearErrorState = (event) => {
    if (event.target.name === "firstname") {
      setFirstnameError("");
    } else if (event.target.name === "lastname") {
      setLastnameError("");
    } else if (event.target.name === "email") {
      setEmailError("");
    } else if (event.target.name === "password") {
      setPasswordError("");
    } else if (event.target.name === "confirmPassword") {
      setConfirmPasswordError("");
    } else if (event.target.name === "contact") {
      setContactError("");
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    clearErrorState(event);

    setSignupInfo({
      ...signupInfo,
      [event.target.name]: value,
    });
    console.log(signupInfo);
  };

  const handleSubmit = () => {
    if (isValidForm()) {
      if (isPasswordMatch()) {
        console.log(signupInfo);
      } else {
        console.log("error");
      }
    } else {
      console.log("fields empty");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={3}>
        <Grid
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          item
          xs={12}
          className={classes.gridItem}
        >
          <HttpsRoundedIcon color="secondary" />
          <Typography>Sign Up</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="First Name"
            name="firstname"
            onChange={handleChange}
            error={firstnameError !== "" ? true : false}
            helperText={firstnameError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Last Name"
            name="lastname"
            onChange={handleChange}
            error={lastnameError !== "" ? true : false}
            helperText={lastnameError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Email Address"
            name="email"
            onChange={handleChange}
            type={"email"}
            error={emailError !== "" ? true : false}
            helperText={emailError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Password"
            name="password"
            onChange={handleChange}
            type={"password"}
            error={passwordError !== "" ? true : false}
            helperText={passwordError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            type={"password"}
            error={confirmPasswordError !== "" ? true : false}
            helperText={confirmPasswordError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Contact"
            name="contact"
            onChange={handleChange}
            error={contactError !== "" ? true : false}
            helperText={contactError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Button
            className={classes.itemStyle}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {" "}
            Sign Up{" "}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Link to="/signup">Already have an account? Sign in</Link>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ marginTop: "3%" }}
          className={classes.gridItem}
        >
          <p>
            Copyright &copy; <a href="www.upgrad.com">upgrad</a> 2021
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
