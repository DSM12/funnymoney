import React, { Component } from "react";
import API from "../../utils/API";

class Modal extends Component {
  state = {
    FullName: "",
    UserName: "",
    Phone: "",
    Email: "",
    Password: ""
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUserSave = User => {
    const user = this.state;

    API.saveUser({
      FullName: user.FullName,
      UserName: user.UserName,
      Email: user.Email,
      Phone: user.Phone,
      Password: user.Password

    }).then(() => console.log("User account created"));
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // this.props.onClose && this.props.onClose(event);
    console.log(this.state);
    this.handleUserSave();
  };

  // onClose = e => {
  //   this.props.onClose && this.props.onClose(e);
  // };
    render(){
      if(!this.props.show){
      return null;
  }
return <div>
        <form>
            <div className="form-inline">
                <label htmlFor="FullName">
                    <strong>Full Name:</strong>
                </label>
                <input
                    name="FullName"
                    type="text"
                    className="form-control"
                    id="FullName"
                    value={this.state.FullName}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Username">
                    <strong>Username:</strong>
                </label>
                <input
                    name="UserName"
                    type="username"
                    className="form-control"
                    id="Username"
                    value={this.state.UserName}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Email">
                    <strong>Email:</strong>
                </label>
                <input
                    name="Email"
                    type="Email"
                    className="form-control"
                    id="Email"
                    value={this.state.Email}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Phone">
                    <strong>Phone:</strong>
                </label>
                <input
                    name="Phone"
                    type="Phone"
                    className="form-control"
                    id="Phone"
                    value={this.state.Phone}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Password">
                    <strong>Password:</strong>
                </label>
                <input
                    name="Password"
                    type="Password"
                    className="form-control"
                    id="Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
         </form>
        {/* <CreateNewAcct>
          FullName = {this.state.FullName};
          UserName = {this.state.UserName};
          Email = {this.state.Email};
          Phone = {this.state.Phone};
          Password = {this.state.Password};
        </CreateNewAcct> */}
        <button
        onClick={this.handleFormSubmit}
        >
        Submit
        </button>
        </div>;
}   
}

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = "modal display-block";
  
//     return (
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           {children}
//           <button onClick={handleClose}>close</button>
//         </section>
//       </div>
//     );
//   };

export default Modal;