import React from 'react';
import ReactDOM from 'react-dom';

import Application from './application';

const render = () => {
    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    );
};

render();

export default render;
