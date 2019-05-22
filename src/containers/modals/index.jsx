import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/modals';

export const ModalContainer = connect(
  function mapStateToProps(state) {
    return {
      modals: state.modals
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }
)(Modal);