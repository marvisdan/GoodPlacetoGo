import React from 'react'
import { connect } from 'react-redux';

import TestModal from './test-modal';
import PlaceModal from './place-modal';

const modalLookup = {
  TestModal,
  PlaceModal,
}

class ModalManager extends React.Component {

  render() {
    const { currentModal } = this.props;
    let renderModal;
    console.log('props', this.props);

    if (currentModal) {
      const { modalType, modalProps } = currentModal;
      const ModalComponent = modalLookup[modalType];
      renderModal = <ModalComponent  {...modalProps} />;
    }
    console.log('renderModal', renderModal);

    return <span>{renderModal}</span>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentModal: state.superModals,
  }
}

export default connect(mapStateToProps, null)(ModalManager);
