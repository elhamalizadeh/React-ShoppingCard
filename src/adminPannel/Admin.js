import { AppBar, Box, Stack, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import FeedPage from "./FeedPage";
import Navbar from "./Navbar";
import { useState } from "react";
const AdminPage = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar setMode={setMode} mode={mode}/>
        <FeedPage />
        <Rightbar />
      </Stack>
      </Box>
      </ThemeProvider>
    </>
  );
};
export default AdminPage;
