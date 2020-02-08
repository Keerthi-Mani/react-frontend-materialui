# React-FrontEnd-MaterialUI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Overview

In this project we will build a React multi step form with multiple componenets including user & personal details, confirmation and success.

## Getting Started

### Installation

```
npm i material-ui
```

### Quick Start

The easiest way to use this component is to import and pass data to a style component:

```
import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
            style={styles.button}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
```

You should see a form like this:

#### Form User Details

<img width="1090" alt="Screen Shot 2020-02-08 at 3 50 23 PM" src="https://user-images.githubusercontent.com/52920074/74091878-dbb16600-4a8a-11ea-97c7-81d4aafc7133.png">

#### Form Personal Details

<img width="1082" alt="Screen Shot 2020-02-08 at 3 50 34 PM" src="https://user-images.githubusercontent.com/52920074/74091877-dbb16600-4a8a-11ea-8fc8-fbf6fa83225c.png">

#### Confirm User Data

<img width="1080" alt="Screen Shot 2020-02-08 at 3 50 52 PM" src="https://user-images.githubusercontent.com/52920074/74091873-da803900-4a8a-11ea-85b6-9fb31e5b0bcc.png">

#### Success

<img width="1092" alt="Screen Shot 2020-02-08 at 3 50 06 PM" src="https://user-images.githubusercontent.com/52920074/74091880-dc49fc80-4a8a-11ea-8505-97f7d62a3172.png">

## License

MIT Licensed Copyright (c) 2020 Keerthi Mani
