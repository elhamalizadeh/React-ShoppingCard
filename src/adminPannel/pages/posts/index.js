import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Button } from "@material-ui/core";
import Navbar from "../../Navbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
//import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";

const Posts = () => {
  const [category, setCategory] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all",
  ];

  console.log("category is " ,category);

  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} sx={{ margin: 5 }}>
          <Typography variant="h5">Posts Page</Typography>
          <form>
            <TextField
              required
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="username"
              variant="outlined"
            />
            <br />
            <TextField
              required
              style={{ width: "200px", margin: "5px" }}
              type="password"
              label="password"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Diversity catagory"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Attribute"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="goal stage"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="number"
              label="job id"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="search"
              label="job search"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary">
              save
            </Button>
          </form>


          {/*  ----------------Form 2------------------ */}

          <React.Fragment>
            <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
              <Box sx={{ padding: 5 }}>
                <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                  Krunch Media
                </Typography>
                <Grid container spacing={3}>
                {/*  ----------------Title------------------ */}
                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Title
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      required
                      id="title"
                      name="title"
                      label="Title"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      onChange={handleChangeTitle}
                    />
                  </Grid>

                  {/*  ----------------Content------------------ */}
                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Content
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Content"
                      multiline
                      fullWidth
                      rows={4}
                      onChange={handleChangeContent}

                    />
                  </Grid>

               {/*  ----------------Url------------------ */}
                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      URL
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField
                      required
                      id="url"
                      name="url"
                      label="URL"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      onChange={handleChangeUrl}
                    />
                  </Grid>

                  {/*  ----------------category----Age ------------- */}
                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Category
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="category"
                        onChange={handleChange}
                      >
                        {categories.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

              {/*  ----------------End category----------------- */}
               {/*  ----------------Author------------------ */}

                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Author
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="author"
                      name="author"
                      label="Author"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      onChange={handleChangeAuthor}
                    />
                  </Grid>

                 {/*  ----------------Image------------------ */}

                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Img Upload
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button>
                      <UploadFileIcon />
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} />
                  <Grid item xs={12} sm={5} />
                  <Grid item xs={12} sm={4}>
                    <Button variant="contained" sx={{ color: "#ff781f" }}>
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={5} />
                </Grid>

      {/*  ----------------Checkbox------------------ */}
                <Grid item xs={12} sm={5}>
                  <FormControl component="fieldset">
                  <FormControlLabel
                      value="saturday"
                      control={<Checkbox />}
                      label="saturday"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="sunday"
                      control={<Checkbox />}
                      label="sunday"
                      labelPlacement="bottom"
                    />
                     <FormControlLabel
                      value="monday"
                      control={<Checkbox />}
                      label="monday"
                      labelPlacement="bottom"
                    />
                  </FormControl>
                </Grid>
              </Box>
            </Paper>
          </React.Fragment>
        </Stack>
      </Box>
      <Box>
        <h4>category is : { category }</h4>
        <h4>title is : { title }</h4>
        <h4>Content is : { content }</h4>
        <h4>url is : { url }</h4>
        <h4>author is : { author }</h4>
      </Box>
    </>
  );
};
export default Posts;
