import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin.js';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  // useEffect(() => {
  //   axios.get(url)
  //   .then(res => {
  //     setCoins(res.data);
  //   })
  //   .catch(error => console.log(error));
  // }, []);

  useInterval(() => {
    axios.get(url)
    .then(res => {
      setCoins(res.data);
    })
    .catch(error => console.log(error));
    },
    5000
  )

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  // let date = new Date(filteredCoins[0]);
  let date = new Date(filteredCoins[0].last_updated);
  let localDate = date.toString().slice(0, 25)
  console.log(localDate)

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto Marketlist</h1>
        <form>
          <input type="text" className="coin-input" placeholder="Search" onChange={handleChange}></input> 
        </form>
      </div>
      <div className="last-updated">
        Last Updated: {localDate}
      </div>
      {/* <div className='last-updated'>
        {filteredCoins[0].last_updated}
      </div> */}
      <table className="labels">
        <th className="name">Name</th>
        <th className="symbol">Symbol</th>
        <th className="price">Price</th>
        <th className="change">Change(24hr)</th>
        <th className="volume">Volume(24hr)</th>
        <th className="market-cap">Market Cap</th>
      </table>
    
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          marketcap={coin.market_cap}
          price={coin.current_price} 
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
};

export default App;
