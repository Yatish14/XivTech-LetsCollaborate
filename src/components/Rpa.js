import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";

class Rpa extends React.Component {
  render() {
    return (
      <div className='rpa'>
        <div className='text'>
            <h2>AI + RPA is what we do</h2>
            <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
            <br></br>
            <Link to = "/XivTech-LetsCollaborate/rpa"><p className='link_p'><b>AI + RPA Automation</b><img src='https://www.xivtech.io./Arrow-black.svg' alt='Right Arrow'></img></p></Link>
        </div>
        <div className='image'>
            <img src = {process.env.PUBLIC_URL + '/images/rp2.jpg'} alt = "RPA"></img>
        </div>
      </div>
    );
  }
}

export default Rpa;
