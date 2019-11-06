import currentUser from 'reducers/currentUser';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    currentUser: currentUser
})

export default allReducers