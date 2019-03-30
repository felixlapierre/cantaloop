import React, { Component } from 'react';
<<<<<<< HEAD
import '../styles/ScheduleBuilderPage.css';
import { Button, Grid } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class TabContent extends Component{

    constructor(props) {
        super(props);
        this.settings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleBack(){
        this.slider.slickPrev();
    }

    handleNext(){
        this.slider.slickNext();
    }

    render() {
        return (
            <Grid>
                <Grid.Row columns={3} verticalAlign='middle' stretched>
                    <Grid.Column width={1} textAlign="center">
                        <Button className="SemesterButton" onClick={this.handleBack} icon='chevron left' size='massive'/>
                    </Grid.Column>
                    <Grid.Column width={14} textAlign="center">
                        <Slider ref={(sliderInstance) => { this.slider = sliderInstance; }} {...this.settings}>
                            <div>
                                {this.props.scheduleComponents[0]}
                            </div>
                            <div>
                                {this.props.scheduleComponents[1]}
                            </div>
                            <div>
                                {this.props.scheduleComponents[2]}
                            </div>
                        </Slider>
                    </Grid.Column>
                    <Grid.Column width={1} textAlign="center">
                        <Button className="SemesterButton" onClick={this.handleNext} icon='chevron right' size='massive'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
=======
import {Grid, Header} from 'semantic-ui-react';
import '../styles/TabContent.css';

class TabContent extends Component{
    constructor(props) {
        super(props);
    }
   
render() {
        return (
         <Header as="h2" textAlign="center">
         Here's your schedule for {this.props.scheduleComponents[0]}
           <br/>
           <br/>
            <Grid centered columns={6}>
             <Grid.Column className="meow">
              <h4> Time </h4>
              <Grid.Row className="meow">
                  <h6> 8:30 AM </h6>
              </Grid.Row>
              <Grid.Row className="meow">
              <h6> 9:00 AM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 9:30 AM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 10:00 AM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 10:30 AM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 11:00 AM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 11:30 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 12:00 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 12:30 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 1:00 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 1:30 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 2:00 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 2:30 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 3:00 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 3:30 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 4:00 PM</h6>
               </Grid.Row>
               <Grid.Row className="meow">
              <h6> 4:30 PM</h6>
               </Grid.Row>

            </Grid.Column>
            <Grid.Column>
                <h4> Monday </h4>
                <Grid.Row>
                <h6> COMP 346 Lecture  <br/> Section S (8:30 AM-10:00 AM) </h6>
                </Grid.Row>
                <br/> <br/> <br/>
                <Grid.Row> <h6> SOEN 341 Lecture <br/> Section CC (10:15 AM-11:30 AM) </h6>
                </Grid.Row>
                <br/> <br/> <br/> <br/> <br/>
                <Grid.Row> <h6> SOEN 228 Lab <br/> Section E (12:30 PM-2:30 PM) </h6>
                </Grid.Row>

            </Grid.Column>
            <Grid.Column>
                <h4> Tuesday </h4>
               <br/>
               <br/>
               <br/>
               <Grid.Row>
               <h6> ENGR 233 Lecture <br/> Section DC (9:15 AM-10:30 AM) </h6>
               </Grid.Row>
               <br/> <br/> <br/>
                <Grid.Row> <h6> SOEN 341 Tutorial <br/> Section CC-A (11:15 AM-12:30 PM) </h6></Grid.Row>

            </Grid.Column>
            <Grid.Column>
                <h4> Wednesday </h4>
        <Grid.Row>
                <h6> ENGR 213 Lecture <br/> Section C-C (8:30 AM-10:00 AM)  </h6></Grid.Row>
                <br/> <br/>
                <Grid.Row>
                     <h6> SOEN 341 Lecture <br/> Section CC (10:15 AM-11:30 AM) </h6>
                </Grid.Row>
                <br/> <br/>
                <Grid.Row>
                <h6> SOEN 228 Lecture <br/> Section E (11:45 AM-1:00 PM) </h6>
                </Grid.Row>
                <br/> <br/> <br/>
                <Grid.Row>
                <h6> COMP 346 Tutorial <br/> Section S-SA (1:30 PM-2:30 PM) </h6>
                </Grid.Row>

            </Grid.Column>
            <Grid.Column>
                <h4> Thursday </h4>
                <br/>
                <br/>
                <br/>
                <Grid.Row>
                    <h6> ENGR 233 Lecture <br/> Section DC (9:15 AM-10:30 AM) </h6>
                </Grid.Row>
                <br/> <br/> <br/>
                <Grid.Row> <h6> SOEN 341 Tutorial <br/> Section CC-A (11:15 AM-12:30 PM) </h6></Grid.Row>

            </Grid.Column>
            <Grid.Column>
            <h4> Friday </h4>
                <h6> ENGR 213 Lecture <br/> Section C-C (8:30 AM-10:00 AM) </h6>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                <Grid.Row>
                     <h6> SOEN 228 Lecture <br/> Section E (11:45 AM-1:00 PM) </h6>
                </Grid.Row>
            </Grid.Column>
          </Grid>
          </Header>
        )
>>>>>>> fc1d9e23b568f53f1bcaf1a1a2a7d1c2f83e6299
    }
}

export default TabContent;
