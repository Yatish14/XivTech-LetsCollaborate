import React from 'react';
import { Link } from 'react-router-dom';
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
  if(showModal)
  {
    console.log("");
  }


  render() {
    const rpaClass = this.state.showModal ? "rpa blur-background" : "rpa";
    return (
      <div className="btnchoice">
      <div className={rpaClass}>
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

                <div className='formcont'>

                    <div className='formcontent'>
                      <div className='forminp'>
                        <label>
                          First Name*<br />
                          <input type="text" name="name" />
                        </label>
                      </div>
                      <div className='forminp'>
                        {/* <br /> */}
                        <label>
                          Last Name*<br />
                          <input type="text" name="name" />
                        </label>
                      </div>
                    </div>


                    <div className='formcontent'>
                      <div className='forminp'>
                        <label>
                        Bussiness Phone<br />
                        <input type='text' name="phone" />
                        </label>
                      </div>
                      <div className='forminp'>
                        {/* <br /> */}
                        <label>
                        Work Email<br />
                        <input type='email' name="email" />
                      </label>
                      </div>
                    </div>


                    <div className='formcontent'>  
                      <div className='forminp'>
                        <label>
                        Organization<br />
                        <input type='text' name="org" />
                      </label> 
                      </div>
                      <div className='forminp'>
                        {/* <br /> */}
                        <label>
                        Job Role<br />
                        <input type='text' name="role" />
                      </label>
                      </div>
                    </div>


                    <div>
                      <label>
                        Country*<br />
                        <select id="country-dropdown">
                        <option value="">--Select a country--</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="IN">India</option>
                        <option value="ZW">Zimbabwe</option>
                        </select>
                      </label>
                    </div>

                    <div className='forminput'>
                      <label>
                        Your Message<br />
                        <input type='text' name="message" />
                      </label>
                    </div>

                </div>
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