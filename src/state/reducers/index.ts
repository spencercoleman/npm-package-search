import { combineReducers } from 'redux';
import npmPackagesReducer from './npmPackagesReducer';

const reducers = combineReducers({
    npmPackages: npmPackagesReducer,
});

export default reducers;
