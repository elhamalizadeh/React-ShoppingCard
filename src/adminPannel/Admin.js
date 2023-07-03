import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import FeedPage from "./FeedPage";
import Navbar from "./Navbar";
const AdminPage = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <FeedPage />
        <Rightbar />
      </Stack>
    </>
  );
};
export default AdminPage;
