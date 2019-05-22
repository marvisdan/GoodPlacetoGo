import constants from '../constants';

export function openSuperModal(modalType, modalProps) {
  return {
    type: constants.OPEN_SUPER_MODAL,
    payload: {
      modalType,
      modalProps,
    },
  }
}

export function closeSuperModal() {
  return {
    type: constants.CLOSE_SUPER_MODAL,
  }
}