import React, {Component} from "react";
//import CustomersList from "./CustomersList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
//import Login from "./Login";


class App extends Component 
{
    render() 
    {
        return ( 
        <React.Fragment>
            <NavBar />
            {/* <Login /> */}
            <ShoppingCart /> 
           {/* <CustomersList /> */}
        </React.Fragment>
        );
        
    }
}

export default App