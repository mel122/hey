import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeToShoppingCart={props.removeToShoppingCart}
        name={props.inventory[0].name}
        price={props.inventory[0].Difficulty}
      />
      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeToShoppingCart={props.removeToShoppingCart}
        name={props.inventory[1].name}
        price={props.inventory[1].Difficulty}
      />
      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeToShoppingCart={props.removeToShoppingCart}
        name={props.inventory[2].name}
        price={props.inventory[2].Difficulty}
      />
      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeToShoppingCart={props.removeToShoppingCart}
        name={props.inventory[3].name}
        price={props.inventory[3].Difficulty}
      />
      <Product
        removeToShoppingCart={props.removeToShoppingCart}
        name={props.inventory[4].name}
        price={props.inventory[4].Difficulty}
      />
      add = {props.add}
      remove = {props.remove}
    </div>
  );
}

export default ProductList;
