import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getUserPlaces } from '../../actions/places';

class SinglePlace extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { item } = this.props;
    if (!item) {
      return null;
    }

    return (
      <Item.Group divided>
        <Item>
          <Item.Image src={item.image_url} />
          <Item.Content>
            <Item.Header as="a">
              {item.title}
            </Item.Header>
            <Item.Meta>
              <span className="cinema">
                {item.address}
              </span>
            </Item.Meta>
            <Item.Description>
              {item.description}
            </Item.Description>
            <Item.Extra>
              <Label>
                IMAX
              </Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("state", state);
  console.log("ownProps", ownProps);

  const placeId = ownProps.match.params.id;
  let id;
  let item;

  if (state.userPlaces && Object.keys(state.userPlaces).length > 0) {
    const existPlace = state.userPlaces.findIndex(el => el === placeId);
    if (existPlace) {
      item = state.places[placeId];
    }
  }

  return {
    error: state.places.error,
    item,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getUserPlaces()),
  };
};

SinglePlace.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlace);