import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "./AdditionalComponents/Coursecard";
import { Container, Typography } from "@mui/material";

const Cart = () => {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h3"> Cart</Typography>
        <Box sx={{ flexGrow: 1 }} mt={5}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <CourseCard
                utitle="civil course"
                mtitle="CGC course"
                duration="22 hrs"
                btntitle="buy"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
