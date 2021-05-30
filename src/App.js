import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from './Category'
import Products from './Products'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)





function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
