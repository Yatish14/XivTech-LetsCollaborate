import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Rpa extends React.Component {
  render() {
    return (
        <div>
          <div className='bds'>
            <p>Cloud Services AWS Azure</p>
          </div>
            <div className='aiandrpa m1'>
              <h2>Cloud Transition = Business Outcomes</h2>
              <p>Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace applications to transform and achieve business goals.</p>
            </div>
            <div className='content'>
              <div className='wrapper'>
                <h3 className='process'><b>On-Demand</b></h3>
                <h3 className='automation'><b>Transformation</b></h3>
                <h3 className='monetization'><b>Utilization</b></h3>
              </div>
              <div className='ourteam'>
                <p>Achieve business outcomes by transforming to cloud. Our unique capabilities allow us to help you, Discover New Revenue Streams, Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to Market, Future Proof your Digital Estate. Why stop here? Go beyond with adopting cloud to integrate new forms of technologies to speed up, automate and improve your business. Cloud Computing integrates technologies such as Artificial Intelligence (AI), Machine Learning, Big Data Analytics, and the Internet of Things (IoT), helping you to achieve your business goals.</p>
              </div>
            <button className='btn'>Get in Touch</button>
            <div className='capability'>
              <div>
                <h3>Capabilities</h3>
              </div>
              <div className='cards'>
                <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%"}}>
                  <Card.Img variant="top" src="https://www.xivtech.io./tile1.png" style = {{width : 300}}/>
                  <Card.Body>
                  {/* <Card.Title>Card Title</Card.Title> */}
                  <br></br>
                  <Card.Text>
                    <Link style={{color: "blue"}}>Cloud Services for Microsoft Azure</Link>
                    <br></br>
                    <br></br>
                    <Link style={{color: "blue"}}>Innovation, Scale, DevOps, Security & Compilance with Azure Cloud</Link>
                    <br></br>
                  </Card.Text>
                  <br></br>
                </Card.Body>
                </Card>
                <Card style={{ width: '300px',border: "2px solid lightgray",cursor: "pointer",marginBottom : "10%",marginLeft: "10%"}}>
                  <Card.Img variant="top" src="https://www.xivtech.io./tile2.png" style = {{width : 300}}/>
                  <Card.Body>
                  {/* <Card.Title>Card Title</Card.Title> */}
                  <br></br>
                  <Card.Text>
                    <Link style={{color: "blue"}}>Cloud Services for AWS</Link>
                    <br></br>
                    <br></br>
                    <Link style={{color: "blue"}}>Innovation, Scale, DevOps, Security & Compilance with AWS</Link>
                    <br></br>
                  </Card.Text>
                  <br></br>
                </Card.Body>
                </Card>
              </div>
            </div>
            </div>
        </div>
    )
  }
}

export default Rpa;
