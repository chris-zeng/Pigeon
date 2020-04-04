import React from "react";
import {Modal} from 'react-bootstrap'
class About extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          onHide={(e) => {
            this.props.onHide();
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            How to use Pigeon?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    );
  }
}

export default About;
