import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import PlaceList from '../../components/place-list';
import './style.css';

import { getUserPlaces } from '../../actions/places';
import { openSuperModal } from '../../actions/super-modal';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { history, match, addPlace } = this.props;

    return (
      <div className='container'>

        <PlaceList {...{ history, match }} />
        <div className='button-container'>
          <Button
            onClick={() => addPlace('PlaceModal', { data: 43 })}
          >
            Add a place
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getUserPlaces()),
  addPlace: (modalType, modalProps) => dispatch(openSuperModal(modalType, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);