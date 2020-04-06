import React from "react";
import { Modal, Row } from "react-bootstrap";
import "./About.css";
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
          <Row id="about-row">
            Want a pack of beer but you too lazy to go out? Want someone to walk
            your dog? Grandma needs groceries but she can't go out? Pigeon
            Support is a free to use platform that aims to help those at risk
            during COVID19 and those who are looking to make an extra income by
            delivering groceries or run other errands. We do not make a single
            penny from this app. We built this because we wanted to help. 
            
            <Row id="about-row">
            Please share so we can reach as many people as possible! It may save lives.
            Please note, Pigeon Support is not responsible for any losses or
            risks, we are simply a platform that connects people together during
            this crisis.
            </Row>
          </Row>
          <Row id="about-row">
            <h3>Persons at risk</h3>
            If you are an individual at risk, please register on our website,
            and click on Create Order button to submit a list of shopping items
            you'd like to perform. A delivery person will then call you and pick
            up their groceries for you. Make sure you have cash and tips ready
            when the delivery man arrives. We recommend $10 gas money + %10 of
            total as tips, but you can discuss this with your delivery person.
            Once order is complete please set your order <b>Complete</b>.
          </Row>
          <Row id="about-row">
            <h3>Delivery person</h3>
            If you are an indivdual looking to make some extra income during the
            bad economic times, simply sign up and our map will reveal contact
            information of anyone that needs shopping done. It is up to you to
            negotiate how much you are charging for the delivery. Please make
            sure to keep safe and wear protective gear at all times.
          </Row>
          <Row id="about-row">
            <h3>Contact Us</h3>
            <p>
              If you have any questions or suggestions please contact
              Chris/Steven at <b>PigeonSupport@mail.com</b>.
            </p>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default About;
