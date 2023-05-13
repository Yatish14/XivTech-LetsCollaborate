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
              <h2>Cloud Services with Azure</h2>
              <p>Accelerate digital change by developing, migrating, and deploying apps in Azure.</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>On-Prem</b></h3>
                <h3 className='automation'><b>Hybrid</b></h3>
                <h3 className='monetization'><b>Multi-Cloud</b></h3>
              </div>
              <div className='ourteam'>
                <p>Cloud computing allows for unlocking new business value, enabling new and flexible models as well as the agility to compete in the rapidly changing world. We enable the cloud journey for our customers by strategizing around unique customer needs and offering expert solutions. Our core focus on rationalization allows us to unlock the true value of Azure. We frame tailored and risk-mitigated cloud strategy solutions which consider all possibilities and minimal downtime.</p>
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
