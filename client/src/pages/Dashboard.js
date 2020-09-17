import React, { Component } from "react";
import AddExpenses from "../components/AddExpenses";
import TodayHeader from "../components/TodayHeader";
import TodayJumbotron from "../components/TodayJumbotron";
// import Nav from "../components/Nav";
import TodaysTransactions from "../components/TodaysTransactions";
import ReactDOM from "react-dom";
import SideBar from "../components/Sidebar";
import API from "../utils/API";

class Dashboard extends Component {
    state = {
      Date: "01/01/2019",
      Amount: "11.54",
      Description: "Duh",
      Merchant: "Over here",
    }

    handleExpenseSave = () => {
      const expense = this.state;
      console.log(JSON.stringify(expense));
      API.saveAddEx({
        Date: expense.Date,
        Amount: expense.Amount,
        Description: expense.Description,
        Merchant: expense.Merchant    
      }).then(() => console.log("Expense created"));
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      // this.props.onClose && this.props.onClose(event);
      console.log(this.state);
      this.handleExpenseSave();
    };

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const Date = event.target.Date;
      const Amount = event.target.Amount;
      const Description = event.target.Description;
      const Merchant = event.target.Merchant;
    };  
  
    // handleFormSubmit = event => {
    //   // Preventing the default behavior of the form submit (which is to refresh the page)
    //   event.preventDefault();  
    //   this.setState({
    //     Date: "",
    //     Amount: "",
    //     Description: "",
    //     Merchant: ""
    //   });
    //   API.saveAddEx(this.state)
    //   .then(() => {
    //       console.log(this.state);
    //   })
    // };

    render() {
        return (
          <div>
          <h1>Funny Money</h1>
          <SideBar />
          {/* <Nav /> */}
          <AddExpenses handleFormSubmit={this.handleFormSubmit} />
          <TodayHeader />
          <TodayJumbotron />
          <TodaysTransactions />
          </div>
        );
      }
    };
    
    export default Dashboard;