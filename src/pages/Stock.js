import stocks from "/Users/mayleensmcp/Desktop/routerStock-App/routerstockapp/src/data/data.js";
import { useParams } from "react-router-dom";
// import { useState } from "react";

function Stock() {
    const params = useParams();
    const symbol = params.symbol
    console.log(symbol);
    const stock = stocks.find(symbol => symbol === symbol)
    const {name, lastPrice, change, high, low, open} = stock
  return(
    <div className="content">
        <h1>{name}({symbol})</h1>
        <p>Last Price: {lastPrice}</p>
        <p>Change: {change}</p>
        <p>High: {high}</p>
        <p>Low: {low}</p>
        <p>Open: {open}</p>
    </div>
  )
}

export default Stock;
