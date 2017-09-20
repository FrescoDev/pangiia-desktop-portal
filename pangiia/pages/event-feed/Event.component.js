import React from 'react';

const EventWidget = ({ event }) =>
    <li className="media">
        <div className="media-left">
            <div className="panel" style={{ margin: '0px', width: '120px', 'textAlign': 'center' }}>
                <div className="panel-heading">
                    <span className="panel-title strong">{event.scheduledDate}</span>
                </div>
            </div>
        </div>
        <div className="media-body">
            <h4 className="media-heading">{event.title}</h4>
            <p style={{ padding: '2%' }}> {event.description}</p>
        </div>
    </li>;

export default EventWidget;
