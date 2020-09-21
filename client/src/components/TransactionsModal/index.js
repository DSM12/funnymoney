import React, { Component } from "react";
import API from "../../utils/API";


class Modal extends Component {
    state = {
        Date: "",
        Amount: "",
        Description: "",
        Merchant: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleTransactionsSave = Transactions => {
        const transactions = this.state;

        API.saveTransactions({
            Date: transactions.Date,
            Amount: transactions.Amount,
            Description: transactions.Description,
            Merchant: transactions.Merchant

        }).then(() => console.log("Transaction created! "));
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log(this.state);
        this.handleTransactionsSave();
    };


    render() {
        if (!this.props.show) {
            return null;
        }
        return <div>
            <form>
                <div className="form-inline">
                    <label htmlFor="Date">
                        <strong>Date:</strong>
                    </label>
                    <input
                        name="Date"
                        type="date"
                        className="form-control"
                        id="Date"
                        value={this.state.Date}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-inline">
                    <label htmlFor="Amount">
                        <strong>Amount:</strong>
                    </label>
                    <input
                        name="Amount"
                        type="text"
                        className="form-control"
                        id="Amount"
                        value={this.state.Amount}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-inline">
                    <label htmlFor="Description">
                        <strong>Description:</strong>
                    </label>
                    <input
                        name="Description"
                        type="text"
                        className="form-control"
                        id="Description"
                        value={this.state.Description}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-inline">
                    <label htmlFor="Merchant">
                        <strong>Merchant:</strong>
                    </label>
                    <input
                        name="Merchant"
                        type="text"
                        className="form-control"
                        id="Merchant"
                        value={this.state.Merchant}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
            </form>

            <button
                onClick={this.handleFormSubmit, this.handleTransactionsSave}
            >
                Confirm Transaction
        </button>
        </div>;
    }
}


export default Modal;