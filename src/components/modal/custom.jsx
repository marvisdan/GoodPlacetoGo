import React, { Component } from 'react';

class CustomModalContent extends Component {

  render() {
    console.log('props', this.props);
    return (
      <div> {this.props.children} </div>
    );
  }
}

export default CustomModalContent;