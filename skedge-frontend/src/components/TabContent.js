import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import '../styles/ScheduleBuilderPage.css';
import { Tab, Button, Grid } from 'semantic-ui-react';

class TabContent extends Component{
    constructor(props) {
        super(props);

        this.state = {visible: false};
        const Table= props => {
        const GridExampleRows = () => (
        <Grid columns={6}>
        <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
]      </Grid.Column>
<   Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        </Grid.Row>
  </Grid>
)
        }

    }
 
    render() {
        return (
            <Tab.Pane>


export default GridExampleRows

            </Tab.Pane>
        )
    }
}

export default TabContent;
