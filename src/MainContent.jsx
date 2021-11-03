import React, {Component} from "react";

class MainContent extends Component 
{
    constructor() {
        super()
        this.state = {pageTitle: "Customer",
                      customersCount: 5        
        };
        this.onRefreshClick = this.onRefreshClick.bind(this);
    }
    render()
    {
        return(
            <div>
                <h1 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge badge-secondary m-2 text-primary">
                        {this.state.customersCount}
                    </span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Add Customer</button>
                </h1>
            </div>
        );
    }
    onRefreshClick = () => {
       this.setState({customersCount : this.state.customersCount + 1 })
    }
}

export default MainContent