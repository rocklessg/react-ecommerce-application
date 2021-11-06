import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {

    state = {
        products: [
            {id: 1, productName: "iPhone", price: 150, quantity: 0},
            {id: 2, productName: "Sony Camera", price: 300, quantity: 0},
            {id: 3, productName: "Samsung QLED TV", price: 350, quantity: 0},
            {id: 4, productName: "Sony Play Station 7", price: 250, quantity: 0},
            {id: 5, productName: "iPad Pro", price: 320, quantity: 0},
            {id: 6, productName: "Hp Core i7 Laptop", price: 600, quantity: 0},
            {id: 7, productName: "Xbox", price: 500, quantity: 0},
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((productItem) => {
                        return (// parents can supply two types of 
                            //information to the child props and content
                        <Product 
                            key={productItem.id} 
                            product={productItem}
                            onIncrement={this.handleChildIncrement}
                            onDecrement={this.handleChildDecrement}
                            onDelete={this.handleDelete}
                            > 
                        <button className="btn btn-primary">Buy Now</button>
                        </Product>
                        );
                    })}
                </div>
            </div>
        );
    }
    // render ends here


    //execute when user clicks on + button
    handleChildIncrement = (product, maxValue) => {

            //clone product using spread (gets elements of an array)
            let allProducts = [...this.state.products];
            //Get index of selected product
            let index = allProducts.indexOf(product);

            if (allProducts[index].quantity < maxValue) {
             allProducts[index].quantity++;
             //update the state of the current (parent) component 
             this.setState({products: allProducts});
            };
    };

    //execute when user clicks on - button
    handleChildDecrement = (product, minValue) => {

            let allProducts = [...this.state.products];
            let index = allProducts.indexOf(product);

            if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--;
            this.setState({products: allProducts});
            };
    };

    //executes when a user clicks
    //delete(X) button in the Product(child) component
    handleDelete = (product) => {
         //clone product using spread (gets elements of an array)
         let allProducts = [...this.state.products];
         //Get index of selected product
         let index = allProducts.indexOf(product);

        if(window.confirm("Are you sure to delete the product?"))
        {
         //delete product based on index
         allProducts.splice(index, 1);

         //update the state of current (parent) component
         this.setState({products: allProducts});
        };

    };
}
export default ShoppingCart;