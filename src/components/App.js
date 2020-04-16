import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../styles/App.scss";
import HomePage from "./HomePage/HomePage.jsx";
import Mission from "./Mission/Mission.jsx";
import Founders from "./Founders/Founders.jsx";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import productdetail from "./ProductDetail/productdetail"
import Productpage from "./ProductsPage/ProductsPage"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={HomePage} />
        
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/founders" component={Founders} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
         <Route exact path="/productdetail" component={productdetail}/>
         <Route exact path="/productpage" component={Productpage}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  );
}

export default App;
