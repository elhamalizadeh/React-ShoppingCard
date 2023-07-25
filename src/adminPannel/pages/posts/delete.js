import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({postId}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete =()=>{
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) => {
            setLoading(false);
            setError(null);
            Swal.fire({
              title: "Deleted!",
              text: `Post number ${postId} deleted successfully`,
              icon: "warning",
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
    return (
      <>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
           {loading && <div className="spinner-border spinner-border-sm me-2"></div>} 
            Delete</button>
      </>
    );
  };
  export default DeletePost;