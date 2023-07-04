import { Box, Typography } from "@mui/material";

const Rightbar = () =>{
    return(
        <>
        <Box flex={2} p={2} sx={{ display:{ xs:"none" , sm:"block"} ,backgroundColor:"pink"}} >
        <Box position="fixed">
          <Typography variant="h6" fontWeight={100}>OnlineFriends</Typography>
        </Box>
        </Box>
        
        </>
    )
}
export default Rightbar;
