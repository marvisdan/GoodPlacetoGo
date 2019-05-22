import React, { Component } from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';


import PlaceItem from '../place-item';
import './place-list.css';

import { deletePlace } from '../../actions/places';

class PlaceList extends Component {
  deletePlaceItem = placeId => () => {
    const { deletePlace } = this.props
    deletePlace(placeId);
  };

  render() {
    const { places, history, match } = this.props;

    if (!places) {
      return null;
    }

    let content;
    if (places.length < 0) {
      content = <h2>There is no places</h2>;
    }

    if (places.length > 0) {
      content = places.map(place => {
        return <div>
          <PlaceItem
            {...{ history, match }}
            key={place._id}
            placeId={place}
            deletePlace={this.deletePlaceItem}
          />
        </div>
      });
    }

    return (
      <Grid padded>
        <Card.Group
          stackable
          className="cardClass"
        >
          {content}
        </Card.Group>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  places: state.userPlaces
});

const mapDispatchToProps = dispatch => ({
  deletePlace: id => dispatch(deletePlace(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
