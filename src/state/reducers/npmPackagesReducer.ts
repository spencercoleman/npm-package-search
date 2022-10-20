import { ActionType } from '../action-types';
import { Action } from '../actions';

interface NPMPackagesState {
    data: string[];
    error: string | null;
    isLoading: boolean;
}

const npmPackagesReducer = (
    state: NPMPackagesState,
    action: Action
): NPMPackagesState => {
    switch (action.type) {
        case ActionType.SEARCH_NPM_PACKAGES:
            return {
                data: [],
                error: null,
                isLoading: true,
            };
        case ActionType.SEARCH_NPM_PACKAGES_SUCCESS:
            return {
                data: action.payload,
                error: null,
                isLoading: false,
            };
        case ActionType.SEARCH_NPM_PACKAGES_ERROR:
            return {
                data: [],
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default npmPackagesReducer;
