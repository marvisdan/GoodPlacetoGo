import { toast } from 'react-toastify';

import constants from '../constants';
import Places from '../requests/places';

function getUserPlacesSuccess(data) {
  return {
    type: constants.FETCH_PLACES_SUCCESS,
    data,
  };
}

function getPlacesError(error) {
  return {
    type: constants.FETCH_PLACES_ERROR,
    error,
  };
}

function addPlaceSuccess(data) {
  return {
    type: constants.ADD_PLACE_SUCCESS,
    payload: {
      ...data,
    },
  }
}
function addPlaceFailure(error) {
  return {
    type: constants.ADD_PLACE_FAILURE,
    error,
  }
}

export function addPlace(place) {
  return async (dispatch) => {
    try {
      const addPlace = await Places('places').create(place);
      dispatch(addPlaceSuccess(addPlace));
      toast.success('Place has been added')
    } catch (error) {
      dispatch(addPlaceFailure(error.response.statusText));
      toast.error(error.response.statusText);

    }
  };
}


function deletePlaceSuccess(id) {
  return {
    type: constants.DELETE_PLACE_SUCCESS,
    id,
  }
}

function deletePlaceFailure(error) {
  return {
    type: constants.DELETE_PLACE_FAILURE,
    error,
  }
}

export function deletePlace(id) {
  return async (dispatch) => {
    try {
      await Places('places').delete(id);
      dispatch(deletePlaceSuccess(id));
      toast.warn('Place has been deleted');
    } catch (error) {
      dispatch(deletePlaceFailure(error.response.statusText));
      toast.error(error.response.statusText);
    }
  }
}

export function editPlaceSuccess(data) {
  return {
    type: constants.EDIT_PLACE_SUCCESS,
    payload: data
  }
}

export function editPlaceFailure(error) {
  return {
    type: constants.EDIT_PLACE_FAILURE,
    error,
  }
}

export function editPlace(place) {
  return async (dispatch) => {
    const editPlace = await Places('places').edit(place);
    try {
      dispatch(editPlaceSuccess(place));
      toast.info('Place has been edited');
    } catch (error) {
      dispatch(editPlaceFailure(error.response.statusText));
      toast.error(error.response.statusText);
    }
  };
}

// fetch places with http request
/* export function fetchPlaces() {
  return dispatch => (
    axios.get(url)
      .then(response => dispatch(fetchPlacesSuccess(response.data.places)))
      .catch(error => dispatch(fetchPlacesError(error)))
  );
} */

// fetch places with promises
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// export const fetchDataJson = () => delay(100)
//   .then(() => Promise.resolve(dataJson.places));

export function getUserPlaces() {
  return async (dispatch) => {
    try {
      const eventPlaces = await Places('places').getAll();
      console.log('result', eventPlaces);
      dispatch(getUserPlacesSuccess(eventPlaces));
    } catch (error) {
      dispatch(getPlacesError(error));
    }
  };
}

export function findPlaceId(id) {
  return {
    type: constants.PLACE_ID,
    id,
  };
}