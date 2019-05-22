import constants from '../../constants';

const initialState = null;

function superModalReducer(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_SUPER_MODAL: {
      let result;
      if (action.payload) {
        const { payload: { modalProps, modalType } } = action;
        result = { modalProps, modalType }
      }
      return result;
    }
    case constants.CLOSE_SUPER_MODAL: {
      return null;
    }
    default: {
      return state;
    }
  }
}

export default superModalReducer;