import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route as Page, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import DevTools from './utils/DevTools';
import EventFeedPage from './pages/event-feed';

const App = ({ store, history }) => {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Page path="/">
                        <Switch>
                            <Page exact path="/" component={EventFeedPage} />
                        </Switch>
                    </Page>
                </ConnectedRouter>
                {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
            </div>
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App