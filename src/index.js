import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Search from './Search'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/" component={App}/>
            </Switch>
        </div>
    </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();

