import React from 'react';
import Navbar from './Navbar.component'
import EventTimeline from './EventTimeline.container';
import { Parallax } from 'react-scroll-parallax';

const EventFeedPage = () =>

    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <img src="http://lorempixel.com/400/200/sports/1/Dummy-Text/" />
    </Parallax>;

export default EventFeedPage;
