import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';/////////////
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';







const pizzaChoice = (state = [], action) => {
    if (action.type === '') {
        return action.payload;
    }
    return state;
}

// The store is the big JavaScript Object that holds all of the information for our application
const reduxStore = createStore(
    combineReducers({
        pizzaChoice,
    }),
    applyMiddleware(logger),
);







// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
<Provider store={reduxStore}>
    <App />
</Provider>, 
document.getElementById('root'));