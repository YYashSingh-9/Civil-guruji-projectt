import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "./AdditionalComponents/Coursecard";

const CardSection = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mt={5}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <CourseCard
              utitle="civil course"
              mtitle="CGC course"
              duration="22 hrs"
            />
          </Grid>
          <Grid xs={6}>
            <CourseCard
              utitle="civil course"
              mtitle="CGC course"
              duration="22 hrs"
            />
          </Grid>
          <Grid xs={6}>
            <CourseCard
              utitle="civil course"
              mtitle="CGC course"
              duration="22 hrs"
            />
          </Grid>
          <Grid xs={6}>
            <CourseCard
              utitle="civil course"
              mtitle="CGC course"
              duration="22 hrs"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default CardSection;
