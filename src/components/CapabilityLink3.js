import React from "react";
import "../App.css";

class CapabilityLink3 extends React.Component {
  render() {
    return (
      <div>
        <div className="bds">
          {/* <p>Build, Deploy and Scale Bots</p> */}
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="aiandrpa mainservice">
          <h2>CI/CD with Azure DevOps</h2>
          <p>Quality Software with Repeatable and Reliable deployments</p>
        </div>
        <div className="content">
          <div className="wrapper">
            <h3 className="process">
              <b>Quality</b>
            </h3>
            <h3 className="automation">
              <b>Reliability</b>
            </h3>
            <h3 className="monetization">
              <b>Speed</b>
            </h3>
          </div>
          <div className="ourteam">
            <p>
              Our expertise with continuous integration, and continuous delivery
              (CI/CD) helps you achieve pace and code quality with your
              releases. We help strategize, design and implement the CI/CD
              pipelines, enabling greater release consistency and reliability.
              We train your team and empower you to stay ahead of the
              competition.
            </p>
          </div>
          <button className="btn">Get in Touch</button>
          <div className="capability">
            <h3>Capabilities</h3>
            <p>
            We offer a full spectrum of enterprise ready solutions to help maximize the benefits of CI/CD.
            </p>

            <div className="gridcont">
              <div className="capabilitycard">
                <div className="capabilityimage">
                  <img
                    src="https://www2.asx.com.au/content/asx/home/markets/trade-our-derivatives-market/_jcr_content/root/responsivegrid/multicolumncontrol_1_1112318830/responsivegrid-1/summarytile_copy/parsys.coreimg.png/1579165112474.png"
                    alt="img"
                  ></img>
                </div>
                <div className="capabilityheader">
                  <b>ADevOps Advisory Services</b>
                </div>
                <div className="capabilitytext">
                  <p>
                  Our DevOps advisory experts will work with you to devise the best DevOps strategy, tailored to your unique needs. Our expertise and focussed approach allows us to establish and optimize the CI/CD development model suited to achieve your business objectives.
                  </p>
                </div>
              </div>

              <div className="capabilitycard">
                <div className="capabilityimage">
                  <img
                    src="https://www2.asx.com.au/content/asx/home/markets/trade-our-derivatives-market/jcr%3acontent/root/responsivegrid/multicolumncontrol_1_1112318830/responsivegrid-0/summarytile/parsys.coreimg.png/1645571093274.png"
                    alt="img"
                  ></img>
                </div>
                <div className="capabilityheader">
                  <b>App Pipelines</b>
                </div>
                <div className="capabilitytext">
                  <p>
                  We help you ship quality software faster by establishing a CI/CD workflow, application & infrastructure deployment. It allows for feature based releases, allowing for Faster Time to Market cycles.
                  </p>
                </div>
              </div>

              <div className="capabilitycard">
                <div className="capabilityimage">
                  <img
                    src="https://www2.asx.com.au/content/asx/home/markets/trade-our-derivatives-market/_jcr_content/root/responsivegrid/multicolumncontrol_1_1112318830/responsivegrid-2/summarytile_copy/parsys.coreimg.png/1579165160021.png"
                    alt="img"
                  ></img>
                </div>
                <div className="capabilityheader">
                  <b>Serverless Infrastructure</b>
                </div>
                <div className="capabilitytext">
                  <p>
                  We help you deploy applications using CI/CD container pipelines, use managed Kubernetes services for your preferred cloud platform.
                  </p>
                </div>
              </div>

              <div className="capabilitycard">
                <div className="capabilityimage">
                  <img
                    src="https://www2.asx.com.au/content/asx/home/markets/trade-our-derivatives-market/_jcr_content/root/responsivegrid/multicolumncontrol_1_1811642221/responsivegrid-2/summarytile/parsys.coreimg.png/1579165114555.png"
                    alt="img"
                  ></img>
                </div>
                <div className="capabilityheader">
                  <b>Process Automation</b>
                </div>
                <div className="capabilitytext">
                  <p>
                  We help you with Build, Integration and Testing Process Automation. It allows for transparency in the development cycle, saving valuable time and bringing in speed.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CapabilityLink3;
