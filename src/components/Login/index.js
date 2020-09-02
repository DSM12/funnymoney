import React from "react";

function Login({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-inline">
                <label htmlfor="Username">
                    <strong>Username:</strong>
                </label>
                <input
                    type="username"
                    className="form-control"
                    id="Username"
                    value="q"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlfor="Password">
                    <strong>Password:</strong>
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="Password"
                    value="q"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-primary"
                >
                Login
              </button>
            <div>
         </form>
  );
}

export default Login;
