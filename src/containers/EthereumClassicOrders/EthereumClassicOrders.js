import React, { Component } from 'react';

import './EthereumClassicOrders.css';

import EthereumClassicOrder from '../../components/EthereumClassicOrder/EthereumClassicOrder';

class EthereumClassicOrders extends Component {
  state = {
      ethereumClassicOrders: [
        {
            id: 1,
            worth: {
                price: 2200,
                currency: 'PLN'
            },
            stockTimeChanges: [
                {
                    time: '1D',
                    stockChange: '+0,91%'
                },
                {
                    time: '1M',
                    stockChange: '-0,21%'
                },
                {
                    time: '3M',
                    stockChange: '-2,29%'
                },
                {
                    time: '12M',
                    stockChange: '+0,42%'
                },
                {
                    time: '30M',
                    stockChange: '+0,85%'
                },
                {
                    time: 'YTD',
                    stockChange: '+1,31%'
                }
            ]
        },
        {
            id: 2,
            worth: {
                price: 2200,
                currency: 'PLN'
            },
            stockTimeChanges: [
                {
                    time: '1D',
                    stockChange: '+0,91%'
                },
                {
                    time: '1M',
                    stockChange: '-0,21%'
                },
                {
                    time: '3M',
                    stockChange: '-2,29%'
                },
                {
                    time: '12M',
                    stockChange: '+0,42%'
                },
                {
                    time: '30M',
                    stockChange: '+0,85%'
                },
                {
                    time: 'YTD',
                    stockChange: '+1,31%'
                }
            ]
        },
      ]
  };
  
  render() {
    const { ethereumClassicOrders } = this.state;

    return (
      <div className="ethereum-classic-orders">
        {ethereumClassicOrders.map(order => <EthereumClassicOrder key={order.id} order={order} />)}
      </div>
    );
  }
}

export default EthereumClassicOrders;
