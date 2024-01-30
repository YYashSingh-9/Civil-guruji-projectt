import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "./AdditionalComponents/Coursecard";
import { useActionData, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../Store/StoreSlice";

const CardSection = () => {
  const actionData = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (actionData) {
      dispatch(actions.getCourseArray(actionData.data));
      console.log(actionData.data);
    }
  }, [actionData]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={5}>
        <Grid container spacing={2}>
          {actionData.data.map((el) => {
            return (
              <Grid xs={6} key={el._id}>
                <CourseCard
                  utitle="civil course"
                  mtitle="CGC course"
                  duration="22 hrs"
                  key={el._id}
                  id={el._id}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default CardSection;
