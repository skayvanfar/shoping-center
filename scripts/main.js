import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router , Route  , hashHistory } from 'react-router';
import { createHistory } from 'history'

import App from './app/App';
import About from './app/About';
import Contact from './app/Contact';


const routes = (
    <Router history={createHistory()}>
        <Route path="/shoping-center/" component={App} />
        <Route path="/shoping-center/about" component={About} />
        <Route path="/shoping-center/contact" component={Contact} />
    </Router>
);



ReactDOM.render(routes ,  document.getElementById('app'));
