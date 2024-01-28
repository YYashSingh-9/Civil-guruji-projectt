import classes from "./HomePage.module.css";
import { Box, Container } from "@mui/material";
import Navbar from "./AdditionalComponents/Navbar";
const HomePage = () => {
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Navbar />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
