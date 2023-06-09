// import stocks from "/Users/mayleensmcp/Desktop/routerStock-App/routerstockapp/src/data/data.js";
import { Link } from "react-router-dom";

function Navbar() {
  // console.log(stocks)
  return (
    <nav className="nav">
      <Link to = "/">
        <div>Home</div>
      </Link>

      <Link to='/stocks'>
        <div>Stocks</div>
      </Link>
      <Link to='/about'>
        <div>About</div>
      </Link>
    </nav>
  );
}

export default Navbar;
