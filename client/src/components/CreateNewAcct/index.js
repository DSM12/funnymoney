import React from "react";

function CreateNewAcct({FullName, UserName, Email,Phone, Password, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-inline">
                <label htmlFor="FullName">
                    <strong>Full Name:</strong>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="FullName"
                    value={FullName}
                    onChange={handleInputChange}
                    required
                />
            </div>
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
                <label htmlFor="Email">
                    <strong>Email:</strong>
                </label>
                <input
                    type="Email"
                    className="form-control"
                    id="Email"
                    value={Email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-inline">
                <label htmlFor="Phone">
                    <strong>Phone:</strong>
                </label>
                <input
                    type="Phone"
                    className="form-control"
                    id="Phone"
                    value={Phone}
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
         </form>
  );
}

export default CreateNewAcct;
