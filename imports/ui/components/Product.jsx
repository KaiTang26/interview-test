// Framework
import React, { PureComponent } from "react";

// Components
import Button from "../components/Button.jsx";
import {Orders} from "../../api/orders/collection.js";
import { Meteor } from 'meteor/meteor';

class Product extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      userId: Meteor.userId(),
      userName: Meteor.user().username,
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
      color: this.props.color,
      size: this.props.size,
      brand: this.props.brand,
      quantity: ""
    }


  }

  handleBuyProduct = () => {
    if(!localStorage.getItem('Meteor.userId')){
      alert('Please login')
    }else if(!this.state.quantity){
      alert('Please buy something')
    }else{
      Orders.insert(this.state); 
      alert("This button does nothing!");
    }

    console.log(Orders.find({"userId":Meteor.userId()}).fetch())
  };

  handleChange = (e)=>{
    const value = e.target.value;
    console.log(value)
    this.setState({
      quantity: value
    })
  }

  render() {
    const {
      name = "Product",
      image,
      brand,
      color,
      description,
      price,
      size
    } = this.props;

    const info = [
      { label: "Brand", value: brand },
      { label: "Name", value: name },
      { label: "Description", value: description },
      { label: "Color", value: color },
      { label: "Size", value: size },
      { label: "Price", value: price }
    ];
    // console.log(this.props)

    return (
      <div className="product">
        <img alt={name} src={image} />
        <div className="details">
          <div className="info">
            {info.map(({ label, value }) =>
              <div className="info-row" key={`${name}-${label}-${value}`}>
                <div className="label">
                  {label}:
                </div>
                <div className="value">
                  {value}
                </div>
              </div>
            )}
          </div>
          <form>
            <label> Quantity: </label>
          <input  type = "number" 
                  name="quantity" 
                  
                  min='1' 
                  max={this.props.quantity} 
                  step='1'
                  onChange={this.handleChange} 
                  />
          </form>
          <Button onClick={this.handleBuyProduct}>
            Buy {name}
          </Button>
          
        </div>
        
      </div>
    );
  }
}

export default Product;
