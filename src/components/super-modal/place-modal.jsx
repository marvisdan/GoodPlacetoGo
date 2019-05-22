import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'

import PlaceForm from '../form';

import { closeSuperModal } from '../../actions/super-modal'


class PlaceModal extends React.Component {
  state = { modalToggle: false };

  handleClose = () => {
    this.props.closeModal()
  }


  render() {
    const { data } = this.props;
    console.log('DATA', data);
    return (
      <Modal
        open={!this.state.modalToggle}
        onClose={this.handleClose}
        dimmer='blurring'
        closeOnDocumentClick={false}
        closeOnDimmerClick={false}

      >
        <Modal.Header> Add A place </Modal.Header>
        <Modal.Content>
          <PlaceForm data={data} />
        </Modal.Content>
      </Modal>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeSuperModal()),
  }
}

export default connect(null, mapDispatchToProps)(PlaceModal);