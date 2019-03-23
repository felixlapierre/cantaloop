import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import { Tab, Button, Grid, Transition, Segment } from 'semantic-ui-react';
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
    }
}

export default TabContent;
