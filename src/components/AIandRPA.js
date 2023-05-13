import React from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

class Rpa extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            <p>Build, Deploy and Scale Bots</p>
          </div>
            <div className='aiandrpa'>
              <h2>AI + RPA = Enabling End-to-End Automation</h2>
              <p>Drive Efficiency, Automate and Monetize</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>Process</b></h3>
                <h3 className='automation'><b>Automation</b></h3>
                <h3 className='monetization'><b>Monetization</b></h3>
              </div>
              <div className='ourteam'>
                <p>Our team of professionals help you deliver measurable business outcomes by strategizing, designing and executing results driven AI + RPA automation. With Ekisu - our flagship AI automation product, we help you with end-to end automation for your workflows. Each automation helps you save time, reduce cost of human capital, and improve efficiency! Now that’s successful Digital Transformation!</p>
              </div>
            <button className='btn'>
              Get in Touch
            </button>
            <div className='capability'>
              <div>
                <h3>Capabilities</h3>
              </div>
              <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%"}}>
                <Card.Img variant="top" src="https://www.xivtech.io./rp4.jpg" style = {{width : 300}}/>
                <Card.Body>
                  {/* <Card.Title>Card Title</Card.Title> */}
                  <br></br>
                  <Card.Text>
                    <Link style={{color: "blue"}}>Bot Automation Simplified</Link>
                    <br></br>
                    <br></br>
                    <Link style={{color: "blue"}}>Build, Deploy and Scale Bots</Link>
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
