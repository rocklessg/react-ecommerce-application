import React, { Component } from "react";

class Product extends Component {

    state = {
        product: this.props.product
    };

    render () {
        return (
            // All properties from parent components are accessesible to the child
            // Components using props by default
            //props is readonly while state is read and write
            //state can not be inherit from parent component
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-bord">                
                        <div className="text-muted">#{this.state.product.id}</div>

                    <h5 className="pt-2 border-top">{this.state.product.productName}</h5>

                    <div>${this.state.product.price}</div>
              </div>
            </div>
        </div>           
        );
    }
}

export default Product
