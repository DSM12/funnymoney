import React from "react";

function Login({ FullName, UserName, Phone, Email, Password }) {
    return (
        <form>
            <div className="form-inline">
                <label htmlfor="FullName">
                    <strong>Full Name:</strong>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    value={FullName}
                    // onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlfor="Username">
                    <strong>Username:</strong>
                </label>
                <input
                    type="username"
                    className="form-control"
                    id="Username"
                    value={UserName}
                    // onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlfor="Email">
                    <strong>Email:</strong>
                </label>
                <inputEmail
                    type="email"
                    className="form-control"
                    id="Email"
                    value={Email}
                    // onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlfor="Phone">
                    <strong>Phone:</strong>
                </label>
                <input
                    type="Phone"
                    className="form-control"
                    id="Phone"
                    value={Phone}
                    // onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlfor="Password">
                    <strong>Password:</strong>
                </label>
                <input
                    type="Password"
                    className="form-control"
                    id="Password"
                    value={Password}
                    // onChange={handleInputChange}
                    required
                />
            </div>
            <button
                // onClick={handleFormSubmit}
                type="submit"
                className="btn btn-primary"
                >
                Login
              </button>
         </form>
  );
}

export default Login;
