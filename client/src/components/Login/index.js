import React from "react";

function Login({UserName, Password, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-inline">
                <label htmlFor="Username">
                    <strong>Username:</strong>
                </label>
                <input
                    type="username"
                    className="form-control"
                    id="Username"
                    value={UserName}
                    onChange={handleInputChange}
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
                    value={Password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-primary"
                >
                Login
              </button>
              </div>
         </form>
  );
}

export default Login;
