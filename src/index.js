import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, HashRouter, Match, Miss, Push} from 'react-router'

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';

import './css/index.css';

const Root = () => {
  return (
    <HashRouter>
    <div>

    <Match exactly pattern='/' component={Home}/>

    <Match exactly pattern='/projects' component={Projects}/>

    <Match exactly pattern='/resume' component={Resume}/>

    </div>
    </HashRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
