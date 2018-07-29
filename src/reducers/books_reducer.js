

import { constant } from '../actions/index';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case constant.FETCHED_BOOKS:
      return {
        loading: true,
      };
    case constant.REQUESTED_BOOKS_SUCCEDED:
      return {
        loading: false,
        data: action.data,
      };
    case constant.REQUESTED_BOOKS_FAILED:
      return {
        loading: false,
        error: true,
        url: [],
      };
    default:
      return state;
  }
}

export default booksReducer;
