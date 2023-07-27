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
import PostCard from "./PostCard";
import { DataArraySharp } from "@mui/icons-material";

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
          console.log("data is:", data);
          console.log("post is:", post);

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
  console.log("valuews are:",values)

  // useCallback
  // const fetchPost = React.useCallback(id =>async () =>{
  //  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //   .then((res) => res.json())
  //         .then((data) => {
  //           setPost(data);
  //           console.log("data is:", data);
  //           setValues({
  //             ...values,
  //             title: data.title,
  //             body: data.body,
  //             author: data.userId,
  //           });
  //         })
  //         .catch((err) => {
  //           setError(err.message);
  //         });
  //   console.log("valsues is :",values)

  // }, [])

  // useEffect(() => {
  //   fetchPost(id)
    
  // }, [fetchPost, id])

  //  handleSubmit =====
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setLoading(true);
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: 1,
  //       title: event.target.title.value,
  //       body: event.target.body.value,
  //       userId: event.target.author.value,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("title is:", values.title, "<br/>body is:",values.body , "<br/>author is:",values.author);
  //       setLoading(false);
  //       setError(null);
  //       Swal.fire({
  //         title: "Thanks!",
  //         text: "Post update successfully",
  //         icon: "success",
  //         confirmButtonText: "Ok",
  //       });
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(err.message);
  //       Swal.fire({
  //         title: "Error!",
  //         text: err.message,
  //         icon: "warning",
  //         confirmButtonText: "Ok",
  //       });
  //     });
  // }

  //  handleChange =====
  // function handleChange(event) {
  //   setValues((previousValues) => ({
  //     ...previousValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // }

  // theme =====
  // const [mode, setMode] = useState("light");
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    <div>
    {title === undefined ? (
      <h1>Loading....</h1>
    ) : (
    <PostCard 
     post = {post}
     id = {id}
    title = {values.title}
    body = {values.body}
    userId= {values.author}

    // id = {id}
    // title = {post.title}
    // body = {post.body}
    // userId= {post.userId}

    />
    )}
    </div>
  );
};
export default ShowPostAdminPanel;
