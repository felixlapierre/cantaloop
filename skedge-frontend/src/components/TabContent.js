import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import { Tab, Button, Grid } from 'semantic-ui-react';

class TabContent extends Component{

    constructor(props) {
        super(props);

        this.state = {visible: false};
    }

    render() {
        return (
            <Tab.Pane> {this.props.scheduleComponents} </Tab.Pane>
        )
    }
}

export default TabContent;
