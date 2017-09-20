import React from 'react';
import Navbar from './Navbar.component'
import EventTimeline from './EventTimeline.container';

const EventFeedPage = () =>
    <div className="container">
        <div className="row">
            <Navbar />
            <EventTimeline />
        </div>
    </div>;

export default EventFeedPage;
