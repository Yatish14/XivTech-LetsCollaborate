import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import "../App.css"

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

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
      {this.state.showModal ? (
          <div className="modal">
            <div className="modal-header">
              <h3>Contact Us</h3>
              <button onClick={this.toggleModal}>X</button>
            </div>
            <div className="modal-body">
              <form>
                <label>
                  First Name:<br />
                  <input type="text" name="name" />
                </label>
                {/* <br /> */}
                <label>
                  Last Name:<br />
                  <input type="text" name="name" />
                </label>
                {/* <br/> */}
                <label>
                  Bussiness Phone:<br />
                  <input type='text' name="phone" />
                </label>
                {/* <br /> */}
                <label>
                  Work Email:<br />
                  <input type='email' name="email" />
                </label>
                {/* <br /> */}
                <label>
                  Organization:<br />
                  <input type='text' name="org" />
                </label>
                {/* <br /> */}
                <label>
                  Job Role:<br />
                  <input type='text' name="role" />
                </label>
                {/* <br /> */}
                <label>
                  Country:<br />
                  <input type='text' name="text" />
                </label>
                {/* <br /> */}
                <label>
                  Message:<br />
                  <input type='text' name="message" />
                </label>
                {/* <br /> */}
              </form>
            </div>
            <div className="modal-footer">
              <button onClick={this.toggleModal}>Submit</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Cloud;