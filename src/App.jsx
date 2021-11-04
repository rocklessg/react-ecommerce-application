import React, {Component} from "react";
//import CustomersList from "./CustomersList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";



class App extends Component 
{
    render() 
    {
        return ( 
        <React.Fragment>
            <NavBar />
            <ShoppingCart />
           {/* <CustomersList /> */}
        </React.Fragment>
        );
        
    }
}

export default App