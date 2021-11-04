import React, {Component} from "react";


class CustomersList extends Component 
{
    constructor() {
        super()
        this.state = {pageTitle: "Customer",
                      customersCount: 5,
                      customers: [
                          {
                           id: 1, 
                           name: "Mallena",
                           phone: "123-456-4566",
                           address: {city: "Abuja"},
                           photo: "https://picsum.photos/id/1011/60"
                          },
                          {
                            id: 2, 
                            name: "Smith", 
                            phone: "663-556-4876",
                            address: {city: "New Olen"},
                            photo: "https://picsum.photos/id/2/60"
                            
                          },
                          {
                            id: 3, 
                            name: "Allen",
                            phone: "093-498-4676",
                            address: {city: "Berlin"},
                            photo: "https://picsum.photos/id/1005/60"    
                        },
                            
                          {
                            id: 4, 
                            name: "Jamoo",
                            phone: "", //"098-498-4596",
                            address: {city: "London"},
                            photo: "https://picsum.photos/id/1/60"
                          },
                          {
                            id: 5,
                            name: "Scott",
                            phone: "2536-8679",
                            address: {city: "New Jersey"},
                            photo: "https://picsum.photos/id/1001/60"
                        }
                      ]       
                     };
                }

                getCustomerNameStyle = (customerName) => {
                    if (customerName.startsWith("S")) return "green-highlight border-left";
                    else if (customerName.startsWith("J")) return "blue-highlight border-right";
                    else return "pink-highlight";  
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
                            <th>S/N</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>{this.getCustomerRow()}</tbody>
                </table>
            </div>
        );
    }
    onRefreshClick = () => {
       this.setState({customersCount : this.state.customersCount + 1 })
    }

    getPhoneToRender = (phone, name) => {
        return phone ? phone : 
            (<h6 className="bg-warning p-1 text-center">
            {name} have no phone number</h6>
            )
    }

    getCustomerRow = () => {
        return (
            this.state.customers.map((customer, index) => {
                return (
                <tr key="{customer.id}">
                    <td>{customer.id}</td>
                    <td>
                        <img src={customer.photo} alt="Customer"/>
                        <div> 
                            <button className="btn btn-secondary" onClick={ () => {this
                                .onChangePhotoClick(customer, index)}}>Change Photo</button>
                        </div>

                    </td>
                    <td className={this.getCustomerNameStyle(customer.name)}>{customer.name}</td>
                    <td>{this.getPhoneToRender(customer.phone, customer.name)}</td>
                    <td>{customer.address.city}</td>
                    </tr>                       
                );
            })
        );
    }

    onChangePhotoClick = (customer, index) => {
        
        var customerArray = this.state.customers;
        customerArray[index].photo = "https://picsum.photos/id/1003/60";
        this.setState({customer: customerArray});
    }
}

export default CustomersList