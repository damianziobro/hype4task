import React, { Component } from 'react';
import './App.css';

import EthereumClassicOrders from './containers/EthereumClassicOrders/EthereumClassicOrders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EthereumClassicOrders />
      </div>
    );
  }
}

export default App;
