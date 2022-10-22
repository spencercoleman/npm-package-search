import { ActionType } from '../action-types';

type NPMPackage = {
    date: string;
    description: string;
    link: string;
    name: string;
    version: string;
};

interface SearchPackagesAction {
    type: ActionType.SEARCH_NPM_PACKAGES;
    payload?: any;
}

interface SearchPackagesSuccessAction {
    type: ActionType.SEARCH_NPM_PACKAGES_SUCCESS;
    payload: NPMPackage[];
}

interface SearchPackagesErrorAction {
    type: ActionType.SEARCH_NPM_PACKAGES_ERROR;
    payload: string;
}

export type Action =
    | SearchPackagesAction
    | SearchPackagesSuccessAction
    | SearchPackagesErrorAction;
