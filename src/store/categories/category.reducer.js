import { CATEGORIES_ACTION_TYPE } from './category.type';
export const CATEGORIES_INITIAL_STATE = {
    categoryMap: {}
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {}
) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoryMap: payload
            }

        default:
            return state;
    }
}