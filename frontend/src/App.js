import React, { Component } from 'react';
import config from './config'
import { Home } from './components';

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <Home></Home>
      </div>
    );
  }
}

export default App;
