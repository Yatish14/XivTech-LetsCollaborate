import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class BolderChoice extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            <p>EnterpriseApps Services</p>
          </div>
            <div className='aiandrpa mainservice'>
              <h2>Cloud Native = Future Proof</h2>
              <p>Achieve Competitive Advantage with Agility, Reliability, Responsiveness and Speed.</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Speed</b></h3>
                <h3 className='automation'><b>Agility</b></h3>
                <h3 className='monetization'><b>Cost-Effective</b></h3>
              </div>
              <div className='ourteam'>
                <p>We know cloud. We help unlock real value by helping you transform your business by virtue of cloud transformation. Being Cloud-Native enables Rapid Responsiveness, Innovative Features, and Zero Downtime. We help you accelerate business velocity and growth by embracing rapid change, large scale and resilence. Our expertise and focus on the Twelve-Factor App and the API First principles allow us to build true cloud-native apps.</p>
              </div>
            <button className='btn'>Get in Touch</button>
            <div className='capability'>
              <div>
                <h3>Capabilities</h3>
              </div>
              <div className='cards'>
                <Link to = "/XivTech-LetsCollaborate/link21">
                <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%"}}>
                  <Card.Img variant="top" src="https://www.xivtech.io./tile1.png" style = {{width : 300}}/>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <br></br>
                    <Card.Text>
                      <Link style={{color: "blue"}}>Build Apps - Deliver new apps Users Love</Link>
                      <br></br>
                    </Card.Text>
                    <br></br>
                  </Card.Body>
                </Card>
                </Link>
                <Link to = "/XivTech-LetsCollaborate/link22">
                <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%",marginLeft: "10%"}}>
                  <Card.Img variant="top" src="https://www.xivtech.io./tile2.png" style = {{width : 300}}/>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <br></br>
                    <Card.Text>
                      <Link style={{color: "blue"}}>Modernize Apps - Rearchitect Valuable Legacy Apps</Link>
                      <br></br>
                    </Card.Text>
                    <br></br>
                  </Card.Body>
                </Card>
                </Link>
              </div>
            </div>
            </div>
        </div>
    )
  }
}

export default BolderChoice;
