import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { Button, Form, } from 'semantic-ui-react';
import { Header, Icon, Image } from 'semantic-ui-react';
import './style.css';

import { addPlace, editPlace } from '../../actions/places';
import { openSuperModal, closeSuperModal } from '../../actions/super-modal';

class PlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.data.name || '',
      description: props.data.description || '',
      address: props.data.address || '',
      zipcode: props.data.zipcode || 0,
      city: props.data.city || '',
      files: [],
      fileName: '',
      nameError: false,
      addressError: false,
      zipcodeError: false,
      cityError: false,
    };
    this.dropzoneRef = React.createRef()
  }

  onChangeName = (event) => {
    const name = event.target.value;
    this.setState({ name });
    console.log('name', name);
    if (name === '') {
      this.setState({ nameError: true })
    }
    event.preventDefault();
  }

  onChangeAddress = (event) => {
    const address = event.target.value;
    this.setState({ address });
    if (address === '') {
      this.setState({ addressError: true })
    }
    event.preventDefault();
  }

  onChangeCity = (event) => {
    const city = event.target.value;
    this.setState({ city });
    if (city === '') {
      this.setState({ cityError: true })
    }
    event.preventDefault();
  }

  onChangeZipCode = (event) => {
    const zipcode = event.target.value;
    this.setState({ zipcode });
    if (zipcode === 0) {
      this.setState({ zipcodeError: true })
    }
    event.preventDefault();
  }

  onChangeDescription = (event) => {
    const description = event.target.value;
    this.setState({ description });
    event.preventDefault();
  }

  onClose = () => {
    const message = 'Are you sure you want to close this modal? Data not saved will be lost.';
    if (this.state.name.length > 0 || this.state.description.length > 0) {
      if (window.confirm(message)) {
        this.props.closeModal();
      }
    }
    else {
      this.props.closeModal();
    }
  }

  onDrop = files => {
    this.setState({
      files: files,
      fileName: files[0].name,
      uploadStatus: true,
    });
  }

  onSubmit = (event) => {
    const { data, addPlace, editPlace, closeModal } = this.props;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const { name, description, address, zipcode, city } = this.state;
    let inputName;
    let inputAddress;
    let inputCity;
    let textAreaDescription;
    let image;

    if (name.length === 0) {
      inputName = null;
    }
    else {
      const nameTrim = name.trim();
      inputName = nameTrim === '' ? null : nameTrim;
    }

    if (address.length === 0) {
      inputAddress = null;
    }
    else {
      const addressTrim = address.trim();
      inputAddress = addressTrim === '' ? null : addressTrim;
    }

    if (city.length === 0) {
      inputCity = null;
    }
    else {
      const cityTrim = city.trim();
      inputCity = cityTrim === '' ? null : cityTrim;
    }

    if (description.length === 0) {
      textAreaDescription = null;
    }
    else {
      const descriptionTrim = description.trim();
      textAreaDescription = descriptionTrim === '' ? null : descriptionTrim;
    }

    if (this.state.files.length > 0) {
      image = this.state.files[0].preview;
    } else {
      image = '';
    }

    let payload = {};
    if (data._id) {
      // edit place event
      payload = {
        ...data,
        name: inputName,
        address: inputAddress,
        zipcode,
        city: inputCity,
        description: textAreaDescription,
        image_url: image,
      }
      console.log('edit payload', payload);
      editPlace(payload);
    } else {
      // create place event
      payload = {
        name: inputName,
        address: inputAddress,
        zipcode,
        city: inputCity,
        description: textAreaDescription,
        image_url: image,
      }
      console.log('create payload', payload);
      addPlace(payload);
    }
    closeModal();
  }

  render() {
    const { name, description, address, zipcode, city, addressError, nameError, cityError, zipcodeError } = this.state;
    return (
      <div>
        <Form className='form' onSubmit={() => this.onSubmit()} noValidate>
          <div className='drop-container'>
            <Dropzone onDrop={this.onDrop}>
              <div className='drop-content'>
                <Icon name='upload' size='huge' />
                <Header content='Drop an image or click to select a file' />
              </div>
            </Dropzone>
            {this.state.files[0] && <Image src={this.state.files[0].preview} />}
          </div>
          <Form.Group>
            <Form.Field required>
              <Form.Input type='text' label="Name" placeholder='Name' maxLength='20' value={name} onChange={this.onChangeName} error={nameError} />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field required>
              <Form.Input type='text' label="Address" placeholder='Address' value={address} onChange={this.onChangeAddress} error={addressError} />
            </Form.Field>
            <Form.Field required>
              <Form.Input type='text' label="ZipCode" name='Zipcode' value={zipcode} onChange={this.onChangeZipCode} error={zipcodeError} />
            </Form.Field>
            <Form.Field>
              <Form.Input type='text' label='City' name='City' maxLength='50' value={city} onChange={this.onChangeCity} error={cityError} required />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Description</label>
            <textarea rows='5' placeholder='Content' maxLength='500' value={description} onChange={this.onChangeDescription} ></textarea>
          </Form.Field>
          <div className='button-wrapper' >
            <Button onClick={() => this.onClose()}>Cancel</Button>
            <Button
              color='blue'
              type='submit'
              disabled={!name || !address || !zipcode || !city}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div >
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let place = {};

  if (ownProps) {
    if (ownProps.data.hasOwnProperty('id') && state.places > 0) {
      place = state.places.filter(x => x === ownProps.data.id)
    }
  }

  return {
    place,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: place => dispatch(addPlace(place)),
    editPlace: place => dispatch(editPlace(place)),
    openModal: () => dispatch(openSuperModal()),
    closeModal: () => dispatch(closeSuperModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);