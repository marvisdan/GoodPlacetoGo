import constants from '../../constants';

const initialState = {
};


function getEntity(data) {
  const placesIds = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of data) {
    placesIds.push(element._id);
  }
  return placesIds;
}

function userPlacesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PLACES_SUCCESS: {
      return getEntity(action.data);
    }

    case constants.ADD_PLACE_SUCCESS: {
      const { _id } = action.payload;
      const result = [
        ...state,
        _id,
      ];
      return result;
    }
    case constants.DELETE_PLACE: {
      return state.filter(id => id !== action._id);
    }

    default:
      return state;
  }
}

export default userPlacesReducer;
