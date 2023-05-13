import React from 'react';
import "../App.css"

class CapabilityLink3 extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            {/* <p>Build, Deploy and Scale Bots</p> */}
            <br></br>
            <br></br>
            <br></br>
          </div>
            <div className='aiandrpa mainservice'>
              <h2>CI/CD with Azure DevOps</h2>
              <p>Quality Software with Repeatable and Reliable deployments</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Quality</b></h3>
                <h3 className='automation'><b>Reliability</b></h3>
                <h3 className='monetization'><b>Speed</b></h3>
              </div>
              <div className='ourteam'>
                <p>Our expertise with continuous integration, and continuous delivery (CI/CD) helps you achieve pace and code quality with your releases. We help strategize, design and implement the CI/CD pipelines, enabling greater release consistency and reliability. We train your team and empower you to stay ahead of the competition.</p>
              </div>
              <button className='btn'>
              Get in Touch
              </button>
            </div>
        </div>
    )
  }
}

export default CapabilityLink3;
