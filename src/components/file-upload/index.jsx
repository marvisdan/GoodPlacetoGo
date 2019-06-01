import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { Header, Icon, Image } from 'semantic-ui-react';
import './style.css';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      fileName: '',
    }
  }

  onDrop = files => {
    this.setState({
      files: files,
      fileName: files[0].name,
      uploadStatus: true,
    });
  }

  render() {
    return (
      <div className='drop-container'>
        <Dropzone onDrop={this.onDrop}>
          <div className='drop-content'>
            <Icon name='upload' size='huge' />
            <Header content='Drop an image or click to select a file' />
          </div>
        </Dropzone>
        {this.state.files[0] && <Image src={this.state.files[0].preview} />}
      </div>
    );
  }
}

export default FileUpload;
