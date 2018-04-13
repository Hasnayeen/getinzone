import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 flex flex-col flex-wrap items-center">
          <Timer />
          <div className=" mt-16 p-4 text-grey-darker rounded">
            <div className="text-grey-dark text-center pt-2 pb-4">Shourtcut Keys</div>
            <div>
              <span className="font-bold">S</span> : start the timer,
              <span className="font-bold"> P</span> : pause the timer,
              <span className="font-bold"> R</span> : reset the timer,
              <span className="font-bold"> B</span> : switch to break,
              <span className="font-bold"> C</span> : open/close config option
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
