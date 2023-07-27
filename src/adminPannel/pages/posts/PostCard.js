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

const PostCard = (props) =>{

    // const [values, setValues] = useState({
    //     id: props.id,
    //     title: props.title,
    //     body: props.body,
    //     authorId: props.userId,
    //   });

    const [authorName, setauthorName] = useState('alireza')

    //const userId = props.userId;
    const fetchData =  React.useCallback(() => {
      const user = fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setauthorName(data.username);
      })
      .catch((err) => {
        setError(err.message);
      });

      setauthorName(user.username)

    }, [props.userId])
  
    useEffect(() => {
      fetchData()
    }, [fetchData])


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  

      //  handleSubmit PUT data
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: event.target.title.value,
        body: event.target.body.value,
        userId: event.target.authorId.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
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
    // function handleChange(event) {
    //     setValues((previousValues) => ({
    //       ...previousValues,
    //       [event.target.name]: event.target.value,
    //     }));
    //   }


        // theme =====
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


    return(
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2}>
            <Sidebar setMode={setMode} mode={mode} />

            <Stack flex={6} direction="row" spacing={2} sx={{ margin: 5 }}>
              <div className="container mt-3">
                {props && (
                  <React.Fragment>
                    <form onSubmit={handleSubmit}>
                      <Paper elevation={3}>
                        <Box sx={{ padding: 5 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ paddingBottom: 5 }}
                          >
                            post number: {props.id}
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
                                //onChange={handleChange}
                                value={props.title}
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
                                //onChange={handleChange}
                                value={props.body}
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
                                id="authorId"
                                name="authorId"
                                label="Author"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                //onChange={handleChange}
                                 value={props.userId}
                                //value={authorName}
                              />
                            <Typography>Author Name is : {authorName} </Typography>
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
    )
}

export default PostCard;