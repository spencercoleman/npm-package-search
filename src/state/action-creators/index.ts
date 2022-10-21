import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchPackages = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_NPM_PACKAGES,
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            );

            const npmPackages = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_NPM_PACKAGES_SUCCESS,
                payload: npmPackages,
            });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({
                    type: ActionType.SEARCH_NPM_PACKAGES_ERROR,
                    payload: error.message,
                });
            }
        }
    };
};
