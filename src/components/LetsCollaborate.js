import React from 'react';
import Rpa from './Rpa';
import Choices from './Choices';
import Innovate from './Innovate';
import Cloud from './Cloud';

class LetsCollaborate extends React.Component {
  render() {
    return (
      <div>
        <Rpa />
        <Choices />
        <Innovate />
        <Cloud />
      </div>
    );
  }
}

export default LetsCollaborate;
