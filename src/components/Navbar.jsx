import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">ProductList</Link> | 
      <Link to="/shoppingcart">ShoppingCart</Link> | 
      <Link to="/checkout">CheckOut</Link>
    </nav>
  );
};

export default Navbar;
