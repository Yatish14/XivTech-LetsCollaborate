import './App.css';
import LetsCollaborate from "./components/LetsCollaborate"
import
{
  BrowserRouter as Router,
  Routes,
  Route
}
from "react-router-dom";
import AIandRPA from "./components/AIandRPA";
import BolderChoice from './components/BolderChoice';
import InnovateSpeed from './components/InnovateSpeed';
import EmbraceCloud from './components/EmbraceCloud';
import CapabiltiyLink1 from "./components/CapabilityLink1";
import CapabiltiyLink21 from "./components/CapabilityLink21";
import CapabiltiyLink22 from "./components/CapabilityLink22";
import CapabiltiyLink3 from "./components/CapabilityLink3";
import CapabiltiyLink41 from "./components/CapabilityLink41";
import CapabiltiyLink42 from "./components/CapabilityLink42";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/XivTech-LetsCollaborate" element = {<LetsCollaborate />}></Route>
          <Route path = "/XivTech-LetsCollaborate/rpa" element = {<AIandRPA />}></Route>
          <Route path = "/XivTech-LetsCollaborate/choice" element = {<BolderChoice />}></Route>
          <Route path = "/XivTech-LetsCollaborate/innovate" element = {<InnovateSpeed />}></Route>
          <Route path = "/XivTech-LetsCollaborate/cloud" element = {<EmbraceCloud />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link1" element = {<CapabiltiyLink1 />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link21" element = {<CapabiltiyLink21 />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link22" element = {<CapabiltiyLink22 />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link3" element = {<CapabiltiyLink3 />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link41" element = {<CapabiltiyLink41 />}></Route>
          <Route path = "/XivTech-LetsCollaborate/link42" element = {<CapabiltiyLink42 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
