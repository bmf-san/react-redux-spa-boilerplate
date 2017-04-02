import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './containers/Home';
import Sample from './components/Sample';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/sample" component={Sample}/>
    </Route>
);
