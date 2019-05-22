/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, Icon, Image } from 'semantic-ui-react';
import './style.css';
import { openSuperModal, } from '../../actions/super-modal';
import { deletePlace } from '../../actions/places';

class PlaceItem extends React.Component {
  render() {
    const { item, editPlace, deletePlace, match } = this.props;

    if (!item) {
      return null;
    }

    const address = `${item.address} ${item.zipcode}, ${item.city}`;
    return (
      <Card raised>
        <Link to={`/places/${item._id}`}>
          <Image src={item.image_url} class='image' />
        </Link>
        <Card.Content>
          <Card.Header>
            {item.name}
          </Card.Header>
          <Card.Meta>
            <span className="address">
              {address}
            </span>
          </Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="add" />
          <Icon name="edit" onClick={() => editPlace('PlaceModal', { data: item })} />
          <a href='#'>
            <Icon name="delete" onClick={() => deletePlace(item._id)} />
          </a>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { placeId } = ownProps;
  const item = state.places[placeId];
  return {
    item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPlace: (modalType, modalProps) => dispatch(openSuperModal(modalType, modalProps)),
    deletePlace: (id) => dispatch(deletePlace(id))
  }
}

PlaceItem.propTypes = {
  deletePlace: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image_url: PropTypes.string,
    address: PropTypes.string,
    zipcode: PropTypes.number,
    city: PropTypes.string,
    rate: PropTypes.number,
    description: PropTypes.string,
    telephone: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceItem);
