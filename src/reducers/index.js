import currentUser from 'reducers/currentUser';
import { combineReducers } from 'redux';
import loading from 'reducers/loading';
import admin from 'reducers/admin';

const allReducers = combineReducers({
    admin,
    currentUser,
    isLoading: loading
})

export default allReducers