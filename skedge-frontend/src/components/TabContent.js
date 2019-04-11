import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import { Button, Grid } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { element } from 'prop-types';

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
        this.slides = [];
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
        this.slides = [];
        for(var key in this.props.scheduleComponents){
            this.slides.push(<div key={key+this.props.year}>{this.props.scheduleComponents[key]}</div>);
            console.log(key+this.props.year);
            console.log(this.props.scheduleComponents[key]);
        }
        return (
            <Grid>
                <Grid.Row columns={3} verticalAlign='middle' stretched>
                    <Grid.Column width={1} textAlign="center">
                        <Button className="SemesterButton" onClick={this.handleBack} icon='chevron left' size='massive'/>
                    </Grid.Column>
                    <Grid.Column width={14} textAlign="center">
                        <Slider ref={(sliderInstance) => { this.slider = sliderInstance; }} {...this.settings}>
                            {this.slides}
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
