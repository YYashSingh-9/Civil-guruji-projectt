import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Form, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CourseCard(props) {
  const { utitle, mtitle, message, duration, id, btntitle } = props;
  const userdata = useSelector((state) => state.sliceOne.currentUserObject);
  const idString = `${id} N ${userdata._id}`;
  console.log(id);

  return (
    <Form method="POST">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {utitle}
          </Typography>
          <Typography variant="h5" component="div">
            {mtitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {duration}
          </Typography>
          <Typography variant="body2">{message}</Typography>
        </CardContent>
        <CardActions>
          {btntitle === "buy" ? (
            <Button
              size="small"
              type="submit"
              name="intent"
              value={`${idString}`}
            >
              buy
            </Button>
          ) : (
            <Button
              size="small"
              type="submit"
              name="intent"
              value={`${idString}`}
            >
              <NavLink to={`/${id}`}>Visit course</NavLink>
            </Button>
          )}
        </CardActions>
      </Card>
    </Form>
  );
}
