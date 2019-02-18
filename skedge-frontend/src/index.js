import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import Skedge from './components/Skedge';
import ScheduleBuilderPage from './components/ScheduleBuilderPage';
import * as serviceWorker from './serviceWorker';

//Render the main component, which is called Skedge.
ReactDOM.render(<Skedge />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
