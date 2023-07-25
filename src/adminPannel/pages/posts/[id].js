import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  createTheme,
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
import * as React from "react";
import Sidebar from "../../Sidebar";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ShowPostAdminPanel = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [values, setValues] = useState({
    id: id,
    title: "",
    body: "",
    author: "",
  });

  //  useEffect
  useEffect(
    () => async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setValues({
            ...values,
            title: data.title,
            body: data.body,
            author: data.userId,
          });
        })
        .catch((err) => {
          setError(err.message);
        });
    },
    []
  );

  //  handleSubmit
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: event.target.title.value,
        body: event.target.body.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("title is:", post.title, "body is:", post.body);
        setLoading(false);
        setError(null);
        Swal.fire({
          title: "Thanks!",
          text: "Post update successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "warning",
          confirmButtonText: "Ok",
        });
      });
  }

  //  handleChange
  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  // theme
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2}>
            <Sidebar setMode={setMode} mode={mode} />

            <Stack flex={6} direction="row" spacing={2} sx={{ margin: 5 }}>
              <div className="container mt-3">
                {post && (
                  <React.Fragment>
                    <form onSubmit={handleSubmit}>
                      <Paper elevation={3}>
                        <Box sx={{ padding: 5 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ paddingBottom: 5 }}
                          >
                            post number: {post.id}
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
                                name="body"
                                multiline
                                fullWidth
                                rows={4}
                                onChange={handleChange}
                                value={values.body}
                              />
                            </Grid>

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

                            <Grid item xs={12} sm={6} />
                            <Grid item xs={12} sm={5} />
                            <Grid item xs={12} sm={4}>
                              <Button
                                variant="contained"
                                sx={{ color: "#ff781f" }}
                                type="submit"
                              >
                                {loading && (
                                  <div className="spinner-border spinner-border-sm me-2"></div>
                                )}
                                Save
                              </Button>
                            </Grid>
                            <Grid item xs={12} sm={5} />
                          </Grid>
                        </Box>
                      </Paper>
                    </form>
                  </React.Fragment>
                )}
              </div>
            </Stack>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default ShowPostAdminPanel;
