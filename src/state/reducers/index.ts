import { combineReducers } from 'redux';
import npmPackagesReducer from './npmPackagesReducer';

const reducers = combineReducers({
    npmPackages: npmPackagesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
