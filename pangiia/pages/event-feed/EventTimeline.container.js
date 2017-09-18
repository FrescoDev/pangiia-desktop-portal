import React from 'react';
import EventWidget from './Event.component';
import TitlePanel from './TitlePanel.component';
import RefreshButton from './RefreshButton.component';
import * as Actions from '../../actions';
import { eventTimeline as styling } from '../../styles/eventTimeline.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EventTimeline extends React.Component {
    async componentDidMount() {
        const { setLoadingState, getEvents, handleError } = this.props.actions;

        try {
            setLoadingState()
            await getEvents()
        } catch (e) {
            handleError()
        }
    }

    render() {

        const { eventCollection } = this.props.state
        const events = eventCollection.events || []

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
                        <div className={styling}>
                            <div className="panel">
                                <TitlePanel />
                                <div className="panel-body">
                                    <ul className="media-list">
                                        {(eventCollection.isLoading) ? 'Loading' : events.map((event, index) => <EventWidget event={event} key={index} />)}
                                    </ul>
                                </div>
                            </div>
                            <RefreshButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventTimeline);
