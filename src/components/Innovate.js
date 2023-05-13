import React from 'react';
import { Link } from 'react-router-dom';

class Innovate extends React.Component {
  render() {
    return (
      <div className='rpa'>
        <div className='text'>
            <h2>Innovate with Speed</h2>
            <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
            <br></br>
            <Link to = "/XivTech-LetsCollaborate/innovate"><p className='link_p'><b>DevOps</b><img src='https://www.xivtech.io./Arrow-black.svg' alt='Right Arrow'></img></p></Link>
        </div>
        <div className='image'>
            <img src = {process.env.PUBLIC_URL + '/images/p2.jpg'} alt = "RPA"></img>
        </div>
      </div>
    );
  }
}

export default Innovate;
