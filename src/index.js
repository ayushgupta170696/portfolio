import React from 'react';
import ReactDOM   from 'react-dom';
//import { Router, Switch, Route } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
//import Jokes from './components/Jokes';
import './index.css';

//const history = createBrowserHistory();

ReactDOM.render(
<App></App>,document.getElementById('root')
 );
{/*<Router history={createBrowserHistory()}>
<Switch>
    <Route exact={true} path='/' component={App} ></Route>
    <Route path='/jokes' component={Jokes} ></Route>
</Switch>
</Router>, */}

