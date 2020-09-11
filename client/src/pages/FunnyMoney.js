import React, { Component } from "react";
import AddExpense from "../components/AddExpenses";

class FunnyMoney extends Component {
    state = {
      Date: "",
      Amount: "",
      Description: "",
      Merchant: "",
    }

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const Date = event.target.Date;
      const Amount = event.target.Amount;
      const Description = event.target.Description;
      const Merchant = event.target.Merchant;
    };
  
  
  
  
  
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      
  
      this.setState({
        Date: "",
        Amount: "",
        Description: "",
        Merchant: ""
      });
    };

    render() {
        return (
          <div>
          <h1>Funny Money</h1>
          <AddExpense></AddExpense>
          </div>
        );
      }
    };
    
    export default FunnyMoney;