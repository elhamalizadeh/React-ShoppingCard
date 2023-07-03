//import * as React from 'react';
import { ButtonGroup, Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/material/Button";
import SendIcon from "@mui/material/Button";
import { pink } from '@mui/material/colors';

const Home = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="container mt-5">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <hr />
      <Button variant="outlined" startIcon={<DeleteIcon />} className="me-3">
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <hr />
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <hr/>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
};

export default Home;
