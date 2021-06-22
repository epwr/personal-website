import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer'

import Home from './pages/Home';
import Projects from './pages/Projects';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

/* TESTING */
import HomeV2 from './test_ideas/HomeV2';

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <div className="interface" hidden="true">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Footer />
        </div>

        <HomeV2 />
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
