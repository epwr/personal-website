import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './index.css';
import Home from './pages/Home.jsx';
import Now from './pages/Now.jsx';
import Blog from './pages/Blog.jsx';
import Notes from './pages/Notes.jsx';
import Error404 from './pages/404.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <div className="interface">
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/now" exact component={Now}/>
                <Route component={Error404} />
            </Switch>
            <Footer />
        </div>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
