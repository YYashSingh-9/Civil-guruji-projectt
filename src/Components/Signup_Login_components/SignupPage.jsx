import Typography from "@mui/material/Typography";
import { Box, Container, Button } from "@mui/material";
import classes from "./SignupLoginPage.module.css";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../Store/StoreSlice";

// Helper functions
const Signup = () => {
  return (
    <>
      <Container fixed className={classes.containerMain}>
        <Typography variant="h3" gutterBottom>
          Signup
        </Typography>
        <Form method="POST">
          <label htmlFor="name">User Name</label>
          <br />
          <input
            type="name"
            id="name"
            name="name"
            placeholder="ex-Yashwardhanm Singh"
          />
          <br />
          <label htmlFor="email">User Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="@example.com"
          />
          <br />
          <label htmlFor="password">User Password</label>
          <br />
          <input type="password" name="password" id="password" />
          <br />
          <Button
            variant="contained"
            sx={{ mt: 5 }}
            type="submit"
            name="intent"
            value="signup"
          >
            Signup
          </Button>
        </Form>
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
        <Form method="POST">
          <label htmlFor="email">User Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="@example.com"
          />
          <br />
          <label htmlFor="password">User Password</label>
          <br />
          <input type="password" name="password" id="password" />
          <br />
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            type="submit"
            name="intent"
            value="login"
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

const SignupLoginPage = () => {
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();
  const actionData = useActionData();
  const dispatch = useDispatch();
  const stateText = loginState
    ? "Already signed in ? Login then  "
    : "Sign up now ";

  const stateToggle = () => {
    setLoginState(!loginState);
  };

  useEffect(() => {
    console.log(actionData);
    if (actionData) {
      if (actionData.status === "success") {
        dispatch(actions.set_token_to_localStorage(actionData));
        navigate("/");
      }
    }
  }, [actionData]);
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
