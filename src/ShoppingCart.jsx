import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {

    state = {
        products: [
            {id: 1, productName: "iPhone", price: 150, quantity: 3},
            {id: 2, productName: "Sony Camera", price: 300, quantity: 5},
            {id: 3, productName: "Samsung QLED TV", price: 350, quantity: 3},
            {id: 4, productName: "Sony Play Station 7", price: 250, quantity: 1},
            {id: 5, productName: "iPad Pro", price: 320, quantity: 2},
            {id: 6, productName: "Hp Core i7 Laptop", price: 600, quantity: 1},
            {id: 7, productName: "Xbox", price: 500, quantity: 2},
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((product) => {
                        return (
                        <Product key={product.id} id={product.id}
                        productName ={product.productName} 
                        price={product.price} 
                        />
                        );
                    })}
                </div>
            </div>
        )
    }
}
export default ShoppingCart;