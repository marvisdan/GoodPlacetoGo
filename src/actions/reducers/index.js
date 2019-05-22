import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import placesReducer from './places';
import userPlacesReducer from './user-places';
import modalReducer from './modal';
import superModalReducer from './super-modal'

const rootReducer = combineReducers({
  places: placesReducer,
  userPlaces: userPlacesReducer,
  form: FormReducer,
  modals: modalReducer,
  superModals: superModalReducer
});

export default rootReducer;
