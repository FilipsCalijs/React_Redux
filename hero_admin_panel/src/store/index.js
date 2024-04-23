import { configureStore } from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';

import filters from '../reducers/filters';
import {thunk} from 'redux-thunk';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

<<<<<<< HEAD
const store = createStore( 
                    combineReducers({heroes, filters}),
                    compose(applyMiddleware(thunk, stringMiddleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                    );
=======
const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
>>>>>>> 6f3ec841992bb238b8e1eae58889e8e52ba11e36

export default store;