import constants from '../constants';

export function openModal(obj) {
  return {
    type: constants.OPEN_MODAL,
    obj,
  }
}

export function closeModal(obj) {
  return {
    type: constants.CLOSE_MODAL,
    obj,
  }
}