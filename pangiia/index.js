import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import App from './App'

const initialState = {
    eventCollection: {
        isLoading: false,
        failedToLoad: false
    }
};

const store = configureStore(initialState);

render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore(initialState);
        const newHistory = newConfigureStore.history;
        const NewApp = App;
        render(
            <AppContainer>
                <NewApp store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
