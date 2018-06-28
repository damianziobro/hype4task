import React from 'react';

import './EthereumClassicOrder.css';

function EthereumClassicOrder({ order }) {
    return (
        <div className="ethereum-classic-order">
            <div className="ethereum-classic-order__label">
                <p className="ethereum-classic-order__label-text">Altcoins</p>
            </div>
            <div className="ethereum-classic-order__container">
                <div className="ethereum-classic-order__description description">
                    <h2 className="description__title">Ethereum Classic combined with Zcash</h2>
                    <span className="description__subtitle description__subtitle--umbrella-icon">
                        Ethereum foundation
                    </span>
                    <span className="description__subtitle description__subtitle--yellow-dot-icon">
                        Altcoins - highest growth
                    </span>
                </div>
                <div className="ethereum-classic-order__items">
                    <span className="ethereum-classic-order__worth worth">
                        <span className="worth__price">
                            {order.worth.price}
                            <span className="worth__currency">
                                {order.worth.currency}
                            </span>
                        </span>
                        <span className="worth__description">Wartość</span>
                    </span>
                    <ul className="ethereum-classic-order__stock-time-changes stock-time-changes">
                        {order.stockTimeChanges.map(stockTimeChange => {
                            return (
                                <li className="stock-time-changes__item">
                                    <span className="stock-time-changes__stock-change">
                                        {stockTimeChange.stockChange}
                                    </span>
                                    <span className="stock-time-changes__time">
                                        {stockTimeChange.time}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="ethereum-classic-order__buttons">
                    <button className="ethereum-classic-order__invest-btn">Inwestuj</button>
                    <div className="ethereum-classic-order__small-buttons">
                        <button className="ethereum-classic-order__eye-btn"></button>
                        <button className="ethereum-classic-order__weight-btn"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EthereumClassicOrder;