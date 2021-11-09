import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
    constructor(props) { //Execute when the component is mounted
        super(props) // component class (parent class)
        this.state = { // initialization of state
            products: [], // initial empty array of products before fetching from json database
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((productItem) => {
                        return (// parents can supply two types of 
                            //information to the child, props and content
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

    //Components Life cylce

    //Execute after contructor and render method (includes life 
    //cycle for child components, if any) of the current component
    componentDidMount = async () => {
        //fetch data from data souce (http request)

        var response = await fetch("http://localhost:5000/products", {
            method: "GET",
        });
        var productItem = await response.json();
        console.log(productItem);

        this.setState({products: productItem});
    }

    componentDidUpdate(prevProps, prevState) {
        //make http call conditionally i.e
        //if (prevProps.x != this.props.x) {
            //make http call
       // } 
    }

    componentWillUnmount() {
        //write clean-up code to cancel http request
    }

    componentDidCatch(error, info) {
        //you can write logger source e.g
        localStorage.lastError = `${error} \n ${JSON.stringify(info)}`;
    }


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
        }

    };
}
export default ShoppingCart;