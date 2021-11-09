import React, { Component } from "react";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            message: ""
        };
    }
    render () {
        return (
            <div className="col-lg-9">
                <h4 className="m1 p-2 border-bottom">Login</h4>

                {/* Email starts*/}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email</label>
                    <input type="text" className="form-control" 
                    value={this.state.email}
                    onChange={(event) => {
                        this.setState({email: event.target.value});
                    }}
                    />
                </div>
                {/* Email ends */}

                {/* Password starts*/}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password</label>
                    <input type="password" className="form-control" 
                    value={this.state.password}
                    onChange={(event) => {
                        this.setState({password: event.target.value});
                    }}
                    />
                </div><br />
                {/* Password ends */}
                

                <div className="text-right">
                    {this.state.message}
                    <button className="btn btn-primary m-1" 
                    onClick={this.onLoginClick}>
                        Login
                    </button>
                </div>
            </div>
        )
    } //end of render method

    //Execute when user clicks on Login
    onLoginClick = () => {
        if (
            this.state.email === "admin@test.com" && 
            this.state.password === "Admin@123"
            ){
            // success message
            this.setState({
                message: (
                <span className="text-success">Successfully Logged-in</span>
                )
            });
        } else {
            // error message
             this.setState({
            message: (
            <span className="text-danger">Invalid login, please try again</span>
            )
        });
        }
    }
}

export default Login