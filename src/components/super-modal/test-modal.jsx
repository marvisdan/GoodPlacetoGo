import React from 'react'
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { closeSuperModal } from '../../actions/super-modal'

const TestModal = ({ closeModal }) => {
  return (
    <Modal closeIcon='close' open={true} onClose={closeModal}>
      <Modal.Header> Test Modal </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Test Modal</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeSuperModal()),
  }

}

export default connect(null, mapDispatchToProps)(TestModal);
