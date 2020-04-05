import React from "react";
import { Modal, Row } from "react-bootstrap";
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
        <Modal.Body>
        <Row>
          Pigeon Support is a free to use ad platform that aims to help those at
          risk during COVID19 and those who are looking to make an extra income
          by delivering groceries.
          </Row>
          <Row>
          If you are an individual at risk, please register on our website, and
          click on Create Order button to submit a list of shopping items you'd
          like to perform. A delivery person will then call you and pick up
          their groceries for you. Make sure you have cash and tips ready when
          the delivery man arrives. We recommend $10 gas money + %10 of total as
          tips, but you can discuss this with your delivery person.
          </Row>
          <Row>
          If you are an indivdual looking to make some extra income during the
          bad economic times, simply sign up and our map will reveal contact
          information of anyone that needs shopping done. It is up to you to
          negotiate how much you are charging for the delivery.
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default About;
