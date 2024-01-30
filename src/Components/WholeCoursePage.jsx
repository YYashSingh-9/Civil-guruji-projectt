import { useSelector } from "react-redux";
import classes from "./WholeCoursePage.module.css";
import { Container, Box, Typography, Button } from "@mui/material";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { Form } from "react-router-dom";
import { useEffect } from "react";
const WholeCoursePage = () => {
  const courseArray = useSelector((state) => state.sliceOne.courseArray);
  const user = useSelector((state) => state.sliceOne.currentUserObject);
  const { id } = useParams();
  const actionData = useActionData();
  const Navigate = useNavigate();
  const currentCourse = courseArray.find((el) => {
    return el._id === id;
  });
  const intentVal = `${user._id} N ${id}`;

  useEffect(() => {
    if (actionData) {
      console.log(actionData);
      if (actionData.status === "success") {
        Navigate("/");
      }
    }
  }, [actionData]);
  return (
    <>
      <Container className={classes.containerMainn}>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h3"> {currentCourse.name}</Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              textAlign: "center",
              margin: "auto",
              marginTop: 2,
            }}
          >
            {currentCourse.details}
          </Typography>
          <Form method="POST">
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              type="submit"
              name="intent"
              value={`${intentVal}`}
            >
              {" "}
              add to cart
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default WholeCoursePage;
