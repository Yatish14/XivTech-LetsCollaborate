import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class Rpa extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            <p>DevOps Services</p>
          </div>
            <div className='aiandrpa mainservice'>
              <h2>DevOps with Azure</h2>
              <p>Greater Agility, Resilience and Portability by building and deploying apps rapidly.</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Collaborate</b></h3>
                <h3 className='automation'><b>Speed</b></h3>
                <h3 className='monetization'><b>Innovate</b></h3>
              </div>
              <div className='ourteam'>
                <p>We help you get to market quicker by integrating DevOps Automation leveraging Containers, CICD and Microservices. Achieve business outcomes by adopting DevOps. Our unique capabilities allow us to help you build continuous delivery pipeline, enhance reliability & resilience, balance agility & consistency at scale.</p>
              </div>
            <button className='btn'>Get in Touch</button>
            <div className='capability'>
              <div>
                <h3>Capabilities</h3>
              </div>
                <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%"}}>
                  <Card.Img variant="top" src="https://www.xivtech.io./tile1.png" style = {{width : 300}}/>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <br></br>
                    <Card.Text>
                      <Link style={{color: "blue"}}>Continuous Integration and Continuous Deployment</Link>
                      <br></br>
                      <br></br>
                      <Link style={{color: "blue"}}>Build, Integration and Testing process automation</Link>
                      <br></br>
                    </Card.Text>
                    <br></br>
                  </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
  }
}

export default Rpa;
