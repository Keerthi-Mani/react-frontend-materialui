import React, { Component, Fragment } from "react";
// import Dialog from "@material-ui/core/Dialog";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Button from "material-ui/RaisedButton";

class FormUserDetails extends Component {
  sumbit = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          {/* <Dialog open="true" fullwidth="true" maxWidth="md"> */}
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            fullWidth="true"
          />
          <br />
          <Button color="primary" variant="contained" onClick={this.submit}>
            Continue
          </Button>
          {/* </Dialog> */}
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
