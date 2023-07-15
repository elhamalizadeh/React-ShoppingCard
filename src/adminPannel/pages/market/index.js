import "../../styles.css";
import { TextField, Button, Box } from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

const Market = () =>{
        return (
            <div className="App">
              <div className="wraper">
                <h2>Retailer Basic Details</h2>
                <form>
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Full Name*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Retailer Code*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Anchor Code*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Address*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Mobile Number*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="number"
                    label="Date of Birth*"
                    variant="outlined"
                  />
                  <br />
                  <Button variant="contained" color="primary">
                    save
                  </Button>
                </form>
              </div>
              <div className="wraper">
                <h2>Retailer Basic Details</h2>
                <form>
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter anchor name"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter anchor code"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter anchor gst"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter anchor tenure"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter anchor credit limit"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="number"
                    label="Enter anchor interest rate"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Enter percentage value"
                    variant="outlined"
                  />
                </form>
              </div>
        
              <div className="wraper">
                <h2>Director 1 KYC Documents</h2>
                <form>
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Aadhaar Card*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="PAN Card*"
                    variant="outlined"
                  />
                  <h2>Director 2 KYC Documents </h2>
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Aadhaar Card*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="PAN Card*"
                    variant="outlined"
                  />
                  <h2>Director 3 KYC Documents </h2>
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Aadhaar Card*"
                    variant="outlined"
                  />
                  <br />
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="PAN Card*"
                    variant="outlined"
                  />
                </form>
              </div>
            </div>
    )
}
export default Market;