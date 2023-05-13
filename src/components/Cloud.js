import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Cloud extends React.Component {
  state = {
    modalOpen: false
  };
  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };
  
  render() {
    return (
      <div className='btnchoice'>
      <div className='rpa'>
        <div className='text'>
            <h2>Embrace Cloud</h2>
            <h3>With Cloud-First accelerate innovation and optimize performance</h3>
            <br></br>
            <Link to = "/XivTech-LetsCollaborate/cloud"><p className='link_p'><b>Cloud Services</b><img src='https://www.xivtech.io./Arrow-black.svg' alt='Right Arrow'></img></p></Link>
        </div>
        <div className='image'>
            <img src = {process.env.PUBLIC_URL + '/images/p3.jpg'} alt = "RPA"></img>
        </div>
      </div>
      <div>
        <button className='btn lets' onClick={this.toggleModal}>
              Get in Touch
        </button>
      </div>
      <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Contact Us</ModalHeader>
        <ModalBody>
          <p>Fill out the form below to get in touch with us:</p>
          {/* Add your form components here */}
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={this.toggleModal}>Submit</button>{' '}
          <button className='btn btn-secondary' onClick={this.toggleModal}>Cancel</button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}

export default Cloud;