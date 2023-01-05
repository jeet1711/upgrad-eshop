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

function Login() {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    pass: "",
  });
  const [emailFieldError, setEmailFieldError] = useState("");
  const [passFieldError, setPassFieldError] = useState("");

  const isValidForm = () => {
    let isValid = true;
    if (
      loginInfo.email === undefined ||
      loginInfo.email === ""
    ){
      setEmailFieldError("Please enter valid email");
      isValid = false;
    }
    if(loginInfo.pass === undefined || loginInfo.pass === "") {
      setPassFieldError("Please enter Password");
      isValid = false;
    }
    return isValid;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if(event.target.name === "email") {
      setEmailFieldError("");
    }
    else {
      setPassFieldError("");
    }
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: value,
    });
  };

  const handleSubmit = () => {
    if(isValidForm()){
      console.log(loginInfo);
    }
    else {
      console.log("fields empty")
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
          <Typography>Sign In</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Email Address"
            type={"email"}
            name="email"
            onChange={handleChange}
            error={emailFieldError !== "" ? true : false}
            helperText={emailFieldError}
          ></TextField>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            className={classes.itemStyle}
            required
            variant="outlined"
            label="Password"
            type={"password"}
            name="pass"
            onChange={handleChange}
            error={passFieldError !== "" ? true : false}
            helperText={passFieldError}
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
            Sign In{" "}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ marginTop: "3%" }}
          className={classes.gridItem}
        >
          <p>
            Copyright &copy; <a href="upgrad.com">upgrad</a> 2021
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
