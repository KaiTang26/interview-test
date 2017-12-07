// Framework
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

// Components
import { Alert, Row, Col } from "reactstrap";
import Page from "../components/Page.jsx";
import {Orders} from "../../api/orders/collection.js";
import Product from "../components/Product";

const css = `{border-style: solid;}`



class Cart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     merchants: [],
  //   };
  // }

  goBack = () => this.props.history.push("/shop");

  render() {
    const products = Orders.find({"userId":Meteor.userId()}).fetch()
    console.log(products)
    
    return (
      <Page pageTitle="shop" history goBack={this.goBack}>
        <div className="shop-page">
          {products.map((ele)=>{
            return(
              <div key={ele._id} className="cart">
              <style>{css}</style>
                <div>Name: {ele.name}</div>
                <div>Brand: {ele.brand}</div>
                <div>Size: {ele.size}</div>
                <div>Price: {ele.price}</div>
                <div>Quantity: {ele.quantity}</div>
              </div>
            )

          })}
        </div>
      </Page>
    );
  }
}

export default Cart;
