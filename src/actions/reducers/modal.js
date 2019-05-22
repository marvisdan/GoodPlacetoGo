import constants from "../../constants";

const initialState = {
  modals: [],
}

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_MODAL: {
      return {
        ...state,
        modals: state.modals.concat(action.obj),
      }
    }

    case constants.CLOSE_MODAL: {
      console.log('action', action);

      return {
        ...state,
        modals: state.modals.filter(item => item.id !== action.obj.id),
      }
    }

    default:
      return state;
  }
}

export default modalReducer;