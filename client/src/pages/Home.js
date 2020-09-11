import React, { Component } from "react";
import Login from "../components/Login";
import Modal from "../components/Modal";

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

  // onClose = e => {
  //   this.props.onClose && this.props.onClose(e);
  // };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.FullName;
    const UserName = event.target.UserName;
    const Phone = event.target.Phone;
    const Email = event.target.Email;
    const Password = event.target.Password;
    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
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
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1>Login</h1>
        <Login></Login>
        <Modal show={this.state.show} onClose={this.showModal} />
        <button  onClick={e => {
              this.showModal();
         }}
          > Create New Account </button>
      </div>
    );
  }
}

export default Home;
