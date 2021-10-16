import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import Home from './pages/Home.jsx';
import Now from './pages/Now.jsx';
import Blog from './pages/Blog.jsx';
import Files from './pages/Files.jsx';
import Error404 from './pages/404.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import CPPModeling from './posts/CPPModeling.jsx'

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <div className="interface">
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/now" exact component={Now}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/files" exact component={Files}/>
                <Route path="/post/cpp-modeling" exact component={CPPModeling}/>
                <Route component={Error404} />
            </Switch>
            <Footer />
        </div>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
