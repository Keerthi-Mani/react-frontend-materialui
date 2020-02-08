import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth="true"
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
