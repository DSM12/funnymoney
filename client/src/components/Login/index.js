import React, { Component } from "react";
import API from "../../utils/API";

class Login extends Component{
    state = {
        Email: "",
        Password: ""
    };

    componentDidMount() {
        this.getUserLogin();
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const Email = event.target.Email;
        const Password = event.target.Password;
        if (Password === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        // this.setState({
        //   [Email]: value
    
        // });
      };
    
    getUserLogin = () => {
        API.getUser()
        .then(result => 
            this.setState({
                Email: result.data.Email,
                Password: result.data.Password
            }) 
        )
        .catch(err => console.log(err));
    }
    
    
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.Name) {
          alert("Fill out your first and last name please!");
        } else if (this.state.Password.length < 6) {
          alert(
            `Choose a more secure Password ${this.state.Password}`
          );
        } else {
          alert(`Hello ${this.state.Name} ${this.state.Phone}`);
        }
    
      };









    render(){
    return (
        <form>
            <div className="form-inline">
                <label htmlFor="Email">
                    <strong>Email:</strong>
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="Email"
                    value={this.state.Email}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Password">
                    <strong>Password:</strong>
                </label>
                <input
                    type="Password"
                    className="form-control"
                    id="Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
            <button
                onClick={this.handleFormSubmit}
                type="submit"
                className="btn btn-primary"
                >
                Login
              </button>
              </div>
         </form>
         
  );
}
}


export default Login;
