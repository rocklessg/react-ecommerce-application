import React, {Component} from "react";

class MainContent extends Component 
{
    constructor() {
        super()
        this.state = {pageTitle: "Customer",
                      customersCount: 5,
                      customers: [
                          {
                           id: 1, 
                           name: "John",
                           phone: "123-456-4566",
                           address: {city: "Abuja"}
                          },
                          {
                            id: 2, 
                            name: "Smith", 
                            phone: "663-556-4876",
                            address: {city: "New Olen"}
                          },
                          {
                            id: 3, 
                            name: "Allen",
                            phone: "093-498-4676",
                            address: {city: "Berlin"}    
                        },
                            
                          {
                            id: 4, 
                            name: "Jamoo",
                            phone: "098-498-4596",
                            address: {city: "London"}
                          },
                          {
                            id: 5,
                            name: "Scott",
                            phone: "109-409-4096",
                            address: {city: "New Jersey"}
                        }
                      ]       
                     };
    };

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
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((customer) => {
                            return (
                            <tr key="{customer.id}">
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address.city}</td>
                            </tr>
                        
                            );
                        })}
                        
                    </tbody>
                </table>
            </div>
        );
    }
    onRefreshClick = () => {
       this.setState({customersCount : this.state.customersCount + 1 })
    }
}

export default MainContent