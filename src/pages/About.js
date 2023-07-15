import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, Button, Typography, Toolbar, Box } from "@mui/material";
import Header from "../components/Header";

const About = () => {
  const RedButton = styled(Button)({
    backgroundColor: "red",
    color: "white",
    marginLeft: 5,
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
  });

  //37:42 min
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoint.up("sm")]: {
      display: "flex",
    },
  }));

  return (
    <>
    <Header />
      {/* <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            AppBar
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        </Toolbar>
      </AppBar> */}
      <h1>About</h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "blue",
          margin: 5,
          "&:hover": {
            backgroundColor: "white",
            color: "blue",
          },
        }}
      >
        First Button
      </Button>
      <Button
        sx={{
          backgroundColor: "pink",
          "&:disabled": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      >
        Disabled
      </Button>
      <RedButton>RedButton</RedButton>
    </>
  );
};

export default About;
