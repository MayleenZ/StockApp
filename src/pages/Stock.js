import stocks from "/Users/mayleensmcp/Desktop/routerStock-App/routerstockapp/src/data/data.js";
import { useParams } from "react-router-dom";
// import { useState } from "react";

function Stock() {
    const params = useParams();
    const symbol = params.symbol
    console.log(symbol);
    const stock = stocks.find((s) => s.symbol === symbol)
    // we use the s to symbolize the invididual stock and then we use dot notation to take the symbol of each stock and make sure its value is the same as the symbol parameter from the URL
    const {lastPrice, change, high, low, open} = stock
    console.log(stock);
  return(
    <div className="content">
      <h1>{stock.name}</h1>
        <h1>({symbol})</h1>
        <p>Last Price: {lastPrice}</p>
        <p>Change: {change}</p>
        <p>High: {high}</p>
        <p>Low: {low}</p>
        <p>Open: {open}</p>
    </div>
  )
}

export default Stock;
