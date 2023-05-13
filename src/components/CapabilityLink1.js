import React from 'react';
import "../App.css"

class CapabilityLink1 extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            {/* <p>Build, Deploy and Scale Bots</p> */}
            <br></br>
            <br></br>
            <br></br>
          </div>
            <div className='aiandrpa link1'>
              <h2>Bot Automation Simplified</h2>
              <p>Build, Deploy and Scale bots</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Quality</b></h3>
                <h3 className='automation'><b>Relability</b></h3>
                <h3 className='monetization'><b>Speed</b></h3>
              </div>
              <div className='ourteam'>
                <p>Our expertise with bot automation helps you achieve speed, quality and reliability in your automated workflows. We help bring about a transformed, efficient and cost-effective digital experience by strategizing, designing and building the bot ecosystem. We train your team and empower you to stay ahead of the competition.</p>
              </div>
              <button className='btn'>
              Get in Touch
              </button>
            </div>
        </div>
    )
  }
}

export default CapabilityLink1;
