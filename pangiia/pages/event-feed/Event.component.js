import React from 'react';

const EventWidget = ({ event }) =>
    <li className="media">
        <div className="media-left">
            <div className="panel text-center date">
                <div className="panel-heading month">
                    <span className="panel-title strong">{event.scheduledDate}</span>
                </div>
                <div className="panel-body day text">{event.scheduledTime}</div>
            </div>
        </div>
        <div className="media-body">
            <h4 className="media-heading">{event.title}</h4>
            <p>{event.description}</p>
        </div>
    </li>;

export default EventWidget;
