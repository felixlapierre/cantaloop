import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './components/LandingPage';
import ScheduleBuilderPage from './components/ScheduleBuilderPage';
import UserRecordPage from './components/UserRecordPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Render the main component, which is called Skedge.
ReactDOM.render(
  <Router>
    <div id='container'>
      <Route exact path="/" component={LandingPage} />
      <Route path="/schedule" component={ScheduleBuilderPage} />
      <Route path="/record" component={UserRecordPage} />
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
