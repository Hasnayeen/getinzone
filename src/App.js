import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 flex flex-row flex-wrap justify-center">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
