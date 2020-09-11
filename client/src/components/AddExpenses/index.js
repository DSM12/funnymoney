import React from "react";

function AddExpense({Date, Amount, Description, Merchant }) {
    return (
      <form>
        <div>
        <label htmlFor="Date">
                    <strong>Date:</strong>
                </label>
                <input
                    name="Date"
                    type="Date"
                    className="form-control"
                    id="Date"
                    value={this.Date}
                    onChange={this.handleInputChange}
                    required
                />
        <label htmlFor="Amount">
                    <strong>Amount:</strong>
                </label>
                <input
                    name="Amount"
                    type="Text"
                    className="form-control"
                    id="Amount"
                    value={this.Amount}
                    onChange={this.handleInputChange}
                    required
                />
        <label htmlFor="Description">
                    <strong>Description:</strong>
                </label>
                <input
                    name="Description"
                    type="Text"
                    className="form-control"
                    id="Description"
                    value={this.Description}
                    onChange={this.handleInputChange}
                    required
                />
        <label htmlFor="Merchant">
                    <strong>Merchant:</strong>
                </label>
                <input
                    name="Merchant"
                    type="Text"
                    className="form-control"
                    id="Merchant"
                    value={this.Merchant}
                    onChange={this.handleInputChange}
                    required
                />
        </div>
      </form>
  );
}

export default AddExpense;
