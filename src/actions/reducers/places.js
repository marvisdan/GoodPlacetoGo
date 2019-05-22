import constants from '../../constants';

const initialState = {};

function sinkAll(array) {
  const obj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    obj[element._id] = element;
  }
  return obj;
}

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PLACES_SUCCESS: {
      console.log('reducer places', sinkAll(action.data));

      return sinkAll(action.data);
    }

    case constants.FETCH_PLACES_ERROR: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }

    case constants.ADD_PLACE_SUCCESS: {
      const { _id } = action.payload;

      if (!_id) {
        return null;
      }

      return {
        ...state,
        [_id]: normalize(action.payload),
      };
    }

    case constants.ADD_PLACE_FAILURE: {
      return Object.assign({}, state, {
        error: action.error,
      });
    }

    case constants.EDIT_PLACE_SUCCESS: {
      const { _id } = action.payload;
      return {
        ...state,
        [_id]: action.payload,
      }
    }

    case constants.EDIT_PLACE_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case constants.DELETE_PLACE_SUCCESS: {
      if (!state[action.id]) {
        return state;
      }

      delete state[action.id];
      return state;
    }

    case constants.DELETE_PLACE_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    default:
      return state;
  }
}

function normalize(item) {
  if (!item.image_url) {
    const imageDefault = 'https://dummyimage.com/600x400/8a8a8a/fff.jpg&text=no+image';
    return {
      ...item,
      image_url: imageDefault,
    }
  }
  return item;
}

export default placesReducer;
