import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './components/LandingPage';
import ScheduleBuilderPage from './components/ScheduleBuilderPage';
import UserRecordPage from './components/UserRecordPage';
import * as serviceWorker from './serviceWorker';

//Render the main component, which is called Skedge.
ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
