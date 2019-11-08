import currentUser from 'reducers/currentUser';
import { combineReducers } from 'redux';
import loading from 'reducers/loading';

const allReducers = combineReducers({
    currentUser,
    isLoading: loading
})

export default allReducers