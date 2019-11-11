import { combineReducers } from 'redux';
import currentUser from 'reducers/currentUser';
import loading from 'reducers/loading';
import admin from 'reducers/admin';
import notification from 'reducers/notification';

const allReducers = combineReducers({
    admin,
    currentUser,
    loading,
    notification
})

export default allReducers