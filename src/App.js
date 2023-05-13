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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
