import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from 'common/routes';

import HomePage from 'pages/home';

const Application = () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact path={routes.home}
                    component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Application;
