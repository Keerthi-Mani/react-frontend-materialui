import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Button from "material-ui/RaisedButton";

class FormUserDetails extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <Button color="primary" variant="contained" onClick={this.submit}>
            Continue
          </Button>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
