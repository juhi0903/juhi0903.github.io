import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import LandingPage from '@pages/LandingPage';

library.add(faStroopwafel);
class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default App;
