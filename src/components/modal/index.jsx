import React, { Component } from 'react';

import './style.css';

export class Modal extends Component {

  onClose = () => {
    const { item, onClose } = this.props

    if (onClose) {
      item.onClose();
      onClose(item);
    } else {
      onClose(item);
    }
  }

  onConfirm = () => {
    const { item, onSubmit, onClose } = this.props
    if (onSubmit) {
      item.onConfirm();
      onClose(item);
    }
  }

  render() {
    const { zIndex, item } = this.props;
    if (item && item.hasOwnProperty('type') && item.type === 'confirmation') {
      console.log('content', item.content);
      return (
        <div className='modal-wrapper' style={{ zIndex: (zIndex + 1) * 10 }}>
          <div className='modal'>
            {item.content}
            <div className='buttons'>
              <button className='modal-button' onClick={this.onConfirm}>Confirm</button>
              <button className='modal-button' onClick={this.onClose}>Close</button>&times;
            </div>
          </div>
        </div >
      )
    } else if (item && item.hasOwnProperty('type') && item.type === 'custom') {
      return (
        <div className='modal-wrapper' style={{ zIndex: (zIndex + 1) * 10 }}>
          <div className='modal'>
            {item.content}
            <div className='buttons'>
              <button className='modal-button' onClick={this.onClose}>Close</button>&times;
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
