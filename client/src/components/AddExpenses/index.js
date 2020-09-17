import React from "react";
import API from "../../utils/API";

function AddExpense({Date, Amount, Description, Merchant, handleInputChange, handleFormSubmit, handleExpenseSave }) {
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
                    value={Date}
                    onChange={handleInputChange}
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
                    value={Amount}
                    onChange={handleInputChange}
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
                    value={Description}
                    onChange={handleInputChange}
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
                    value={Merchant}
                    onChange={handleInputChange}
                    required
                />
                <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-primary"
                >
                Add Expense
              </button>
        </div>
  </form>
  );
}

export default AddExpense;
