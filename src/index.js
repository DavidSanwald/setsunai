/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import Root from './components/Root';
import KlangApp from './reducers'
import player from './middleware/player'
import ticker from './middleware/ticker'
import createLogger from 'redux-logger';
import { orm } from './orm/models';
import bootstrap from './orm/bootstrap';
import {activeCounts} from './orm/selectors'
import Perf from 'react-addons-perf'




const logger = createLogger({
  predicate: (getState, action) => action.type !== 'ADVANCE_TICK'
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(KlangApp,bootstrap(orm), composeEnhancers(applyMiddleware(logger, player)));

const metronome = new ticker(store).scheduler()

ReactDOM.render(
<Root store={store} />,
  document.getElementById('root')
);
