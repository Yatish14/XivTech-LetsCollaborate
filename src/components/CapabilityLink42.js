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
              <h2>Cloud Services with AWS</h2>
              <p>Accelerate digital change by developing, migrating, and deploying apps in AWS.</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Agile</b></h3>
                <h3 className='automation'><b>Scalable</b></h3>
                <h3 className='monetization'><b>Innovative</b></h3>
              </div>
              <div className='ourteam'>
                <p>We enable the cloud journey for our customers by strategizing around unique customer needs and offering expert solutions. Our core focus on rationalization allows us to unlock the true value of AWS. We frame tailored and risk-mitigated cloud strategy solutions which consider all possibilities and minimal downtime.</p>
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
