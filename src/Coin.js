import React from 'react';

const Coin = ({name, symbol, image, price, volume, priceChange, marketcap}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>{name}</h1>
          <p1 className="coin-symbol">{symbol}</p1>
          <img src={image} alt="crypto"></img>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
          <p className="price-change red">{priceChange.toFixed(2)}%</p> 
          ) : (
          <p className="price-change green">{priceChange.toFixed(2)}%</p>)}
          <p className="coin-marketcap">
            Mkt cap: ${marketcap.toLocaleString()}
            </p>          
        </div>
      </div>
    </div>
  );
};

export default Coin;