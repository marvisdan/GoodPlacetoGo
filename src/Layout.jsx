/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ModalContainer } from './containers/modals';
import ModalManager from './components/super-modal/modal-manager';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { getUserPlaces } from './actions/places';


class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {React.cloneElement(children, this.props)}
        <ModalContainer />
        <ModalManager />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getUserPlaces()),
});

export default connect(null, mapDispatchToProps)(Layout);
