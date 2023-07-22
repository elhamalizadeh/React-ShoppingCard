import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  createTheme
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
import Sidebar from "../../Sidebar";
import { ThemeProvider } from "@emotion/react";


function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
			title: '',
			content: '',
			url: '',
			author: '',
      category:''
		};
	return JSON.parse(storedValues);
}


const Posts = () => {

const [values, setValues] = useState(getFormValues)

React.useEffect(() => {
  localStorage.setItem('form', JSON.stringify(values));
}, [values]);

function handleSubmit(event) {
  event.preventDefault();
  alert('An error occurred on the server. Please try again!!!');
}

function handleChange(event){
  setValues((previousValues)=>({
   ...previousValues ,
  [event.target.name] : event.target.value
  }))
}


  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };

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

        <Stack flex={6} direction="row" spacing={2} sx={{ margin: 5 }}>
          {/* <form>
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
          </form> */}


          {/*  ----------------Form 2------------------ */}

          <React.Fragment>
            <form onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
              <Box sx={{ padding: 5 }}>
                <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                  New Post
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
                      id="title"
                      name="title"
                      label="Title"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      // onChange={handleChangeTitle}
                      onChange={handleChange}
                      value={values.title}
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
                      name="content"
                      multiline
                      fullWidth
                      rows={4}
                      onChange={handleChange}
                      value={values.content}
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
                      onChange={handleChange}
                      value={values.url}
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
                        name="category"
                        value={values.category}
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
                      onChange={handleChange}
                      value={values.author}
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
                    <Button variant="contained" sx={{ color: "#ff781f" }} type="submit">
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={5} />
                </Grid>

      {/*  ----------------Checkbox------------------ */}
                <Grid item xs={12} sm={5}>
                  <FormControl component="fieldset">
                  <FormControlLabel
                  value={values.saturday}
                      // value="saturday"
                      control={<Checkbox />}
                      label="saturday"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                    value={values.sunday}
                      // value="sunday"
                      control={<Checkbox />}
                      label="sunday"
                      labelPlacement="bottom"
                    />
                     <FormControlLabel
                     value={values.monday}
                      // value="monday"
                      control={<Checkbox />}
                      label="monday"
                      labelPlacement="bottom"
                    />
                  </FormControl>
                </Grid>
              </Box>

              <Box sx={{ padding: 5 }}>
                <h5>category is : { values.category }</h5>
                <h5>title is : { values.title }</h5>
                <h5>Content is : { values.content }</h5>
                <h5>url is : { values.url }</h5>
                <h5>author is : { values.author }</h5>
              </Box>
            </Paper>
            </form>
          </React.Fragment>
        </Stack>

        </Stack>
      </Box>

      </ThemeProvider>

    </>
  );
};
export default Posts;
