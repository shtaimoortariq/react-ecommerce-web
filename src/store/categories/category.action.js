import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (catergoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    catergoriesArray
  );
};

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};
