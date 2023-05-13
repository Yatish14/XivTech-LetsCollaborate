import React from 'react';
import { Link } from 'react-router-dom';

class Choices extends React.Component {
  render() {
    return (
      <div className='rpa'>
        <div className='text'>
            <h2>Make Bolder Choices</h2>
            <h3>Digital focused strategies to realize market-changing ideas</h3>
            <br></br>
            <Link to = "/XivTech-LetsCollaborate/choice"><p className='link_p'><b>Build Better Apps</b><img src='https://www.xivtech.io./Arrow-black.svg' alt='Right Arrow'></img></p></Link>
        </div>
        <div className='image'>
            <img src = {process.env.PUBLIC_URL + '/images/p1.png'} alt = "RPA"></img>
        </div>
      </div>
    );
  }
}

export default Choices;
