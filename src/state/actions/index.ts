import { ActionType } from '../action-types';

interface SearchPackagesAction {
    type: ActionType.SEARCH_NPM_PACKAGES;
    payload?: any;
}

interface SearchPackagesSuccessAction {
    type: ActionType.SEARCH_NPM_PACKAGES_SUCCESS;
    payload: string[];
}

interface SearchPackagesErrorAction {
    type: ActionType.SEARCH_NPM_PACKAGES_ERROR;
    payload: string;
}

export type Action =
    | SearchPackagesAction
    | SearchPackagesSuccessAction
    | SearchPackagesErrorAction;
