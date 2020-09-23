import React, { Component } from "react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import "../pages/Home.css";

class Home extends Component {
  state = {
    FullName: "",
    UserName: "",
    Phone: "",
    Email: "",
    Password: "",
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };



  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const Email = event.target.UserName;
    const Password = event.target.Password;
    if (Password === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [Email]: value

    });
  };



  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.Name) {
      alert("Fill out your first and last name please!");
    } else if (this.state.Password.length < 6) {
      alert(
        `Choose a more secure Password ${this.state.Name}`
      );
    } else {
      alert(`Hello ${this.state.Name} ${this.state.Phone}`);
    }

    this.setState({
      Name: "",
      Phone: "",
      Password: "",
      UserName: "",
      Email: "",
    });
  };

  render() {
//     <head>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name"></link>
// <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>
// </head>
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      
      <div>
        <div id="LoginText">
          <h1>Login</h1>
        </div>
        <div id="divLoginForm">
          <Login />
        </div>
        <div id="divModal">
          <Modal show={this.state.show} onClose={this.showModal} />
        </div>
          <button id="CreateAccountButton"  onClick={e => {
            this.showModal();
         }}
          > Create New Account </button>
      </div>
    );
  }
}

export default Home;
