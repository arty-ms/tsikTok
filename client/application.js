import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'common/routes';
import Header from './components/header/Header';

import HomePage from 'pages/home';
import SignInPage from 'pages/sign-in';
import SignUpPage from 'pages/sign-up';
import SignOutPage from 'pages/sign-out';
import UploadVideoPage from 'pages/upload-video';

const Application = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Application;
