import React, { Component } from 'react';
import {Tab, Grid, Container, Header} from 'semantic-ui-react';
import * as ReactDOM from 'react-dom';


class TabContent extends Component{
    constructor(props) {
        super(props);
    }
    
 
render() {
        return (
         <Header as="h2" textAlign="center">   
           Days of Week
           <br/>
           <br/>
            <Grid centered columns={6}>                         
             <Grid.Column>
              <h4> Time </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Monday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Tuesday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Wednesday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Thursday </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> Friday </h4>
            </Grid.Column>
          </Grid>
          </Header>
        )
    }
}

export default TabContent;
