import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

const Post = ({ post }) => {

  return (
    <article>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <p>Post ID: {post.id}</p>
</article>

    // <>
    //   <Box>
    //     <Card sx={{ margin:5 }}>
    //       <CardHeader
    //         avatar={
    //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //             R
    //           </Avatar>
    //         }
    //         action={
    //           <IconButton aria-label="settings">
    //             <MoreVertIcon />
    //           </IconButton>
    //         }
    //         title="Shrimp and Chorizo Paella"
    //         subheader="September 14, 2016"
    //       />
    //       <CardMedia
    //         component="img"
    //         height="194"
    //         image="https://mui.com/static/images/cards/paella.jpg"
    //         alt="Paella dish"
    //       />
    //       <CardContent>
    //         <Typography variant="body2" color="text.secondary">
    //           This impressive paella is a perfect party dish and a fun meal to
    //           cook together with your guests. Add 1 cup of frozen peas along
    //           with the mussels, if you like.
    //         </Typography>
    //       </CardContent>
    //       <CardActions disableSpacing>
    //         <IconButton aria-label="add to favorites">
    //         <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color:"red" }}/>} />
    //         </IconButton>
    //         <IconButton aria-label="share">
    //           <ShareIcon />
    //         </IconButton>
    //       </CardActions>
    //     </Card>
    //   </Box>
    // </>
  );
};
export default Post;
