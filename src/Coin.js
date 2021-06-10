import './Coin.css';

const Coin = ({name, symbol, image, price, volume, priceChange, marketcap}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto"></img>
          <h1>{name}</h1>
          <p1 className="coin-symbol">{symbol}</p1>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>
          {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p> 
          ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className="coin-marketcap">${marketcap.toLocaleString()}</p>          
        </div>
      </div>
    </div>
  );
};

export default Coin;