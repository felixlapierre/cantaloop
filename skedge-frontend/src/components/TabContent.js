import React, { Component } from 'react';
import '../styles/ScheduleBuilderPage.css';
import { Tab, Button, Grid, Transition, Segment } from 'semantic-ui-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class TabContent extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
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
            </div>
        );
    }
}

export default TabContent;
