import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { Box, Container, TextField, Button } from "@mui/material";
import classes from "./SignupLoginPage.module.css";
import { useState } from "react";
// Helper functions
const Signup = () => {
  return (
    <>
      <Container fixed className={classes.containerMain}>
        <Typography variant="h3" gutterBottom>
          Signup
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>
        <Button variant="contained" sx={{ mt: 5 }}>
          Signup
        </Button>
      </Container>
    </>
  );
};

const Login = () => {
  return (
    <>
      <Container fixed className={classes.containerMain}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Box>
        <Button variant="contained" sx={{ mt: 3 }}>
          Login
        </Button>
      </Container>
    </>
  );
};

const SignupLoginPage = () => {
  const [loginState, setLoginState] = useState(false);
  const stateText = loginState
    ? "Already signed in ? Login then  "
    : "Sign up now ";

  const stateToggle = () => {
    setLoginState(!loginState);
  };
  return (
    <>
      {loginState ? <Signup /> : <Login />}
      <Box
        sx={{
          marginLeft: 2,
          width: 1100,
          marginTop: 2,
          textAlign: "center",
        }}
      >
        <Button onClick={stateToggle}>
          <Typography variant="h6">{stateText}</Typography>
        </Button>
      </Box>
    </>
  );
};

export default SignupLoginPage;
