import React, { Component } from 'react';

import ModalPortal from '../modal/portal';

import { closeModal } from '../../actions/modals';
import { Modal } from '../modal';

class Modals extends Component {

  render() {
    const { modals } = this.props;

    if (!modals) {
      return null;
    }

    const content = modals.modals.map((item, index) => (
      <ModalPortal>
        <Modal
          key={index}
          item={item}
          zIndex={1}
          onClose={item => this.props.dispatch(closeModal(item))}
        />
      </ModalPortal>
    ))
    return (
      <div className={modals.length > 0 ? 'modal' : ''}>
        {content}
      </div >
    );
  }
}

export default Modals;