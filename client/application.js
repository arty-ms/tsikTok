import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic'

import routes from 'common/routes';
import Header from './components/header/Header';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import HomePage from 'pages/home';
import SignInPage from 'pages/sign-in';
import SignUpPage from 'pages/sign-up';
import SignOutPage from 'pages/sign-out';
import UploadVideoPage from 'pages/upload-video';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Application = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Header/>
        <Switch>
          <Route
            exact
            path={routes.home}
            component={HomePage}
          />
          <Route
            exact
            path={routes.signIn}
            component={SignInPage}
          />
          <Route
            exact
            path={routes.signUp}
            component={SignUpPage}
          />
          <Route
            exact
            path={routes.signOut}
            component={SignOutPage}
          />
          <Route
            exact
            path={routes.uploadVideo}
            component={UploadVideoPage}
          />
        </Switch>
    </AlertProvider>
  );
};

export default Application;
