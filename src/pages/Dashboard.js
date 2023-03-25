import { Link } from "react-router-dom";
import stocks from "/Users/mayleensmcp/Desktop/routerStock-App/routerstockapp/src/data/data.js";

function Dashboard() {
  console.log(stocks);

  return (
    <div className="content">
    <h1>Company Name</h1>
    <div>
      {stocks.map((stock) => {
        const { name, symbol } = stock;
        return (
          <div key={symbol}>
            <Link to={`/stock/${symbol}`}>
              <p>
                {name} ({symbol})
              </p>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Dashboard;
