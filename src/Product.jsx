import React, { Component } from "react";

class Product extends Component {
    render () {
        return (
            // All properties from parent components are accessesible to the child
            // Components using props by default
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-bord">                
                        <div className="text-muted">#{this.props.id}</div>

                    <h5 className="pt-5 border-top">{this.props.productName}</h5>

                    <div>${this.props.price}</div>
              </div>
            </div>
        </div>
           
        );
    }
}

export default Product
