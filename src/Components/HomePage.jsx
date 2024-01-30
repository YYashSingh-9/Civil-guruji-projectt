import { Box, Container } from "@mui/material";
import Navbar from "./AdditionalComponents/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/StoreSlice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.sliceOne.currentUserObject);
  useEffect(() => {
    dispatch(actions.get_token_from_localStorage());
  }, []);

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
