import React, { Component } from "react";
// import AddExpenses from "../components/AddExpenses";
import TodayHeader from "../components/TodayHeader";
import TodayJumbotron from "../components/TodayJumbotron";
// import Nav from "../components/Nav";
import TodaysTransactions from "../components/TodaysTransactions";
import ReactDOM from "react-dom";
import SideBar from "../components/Sidebar";

class Dashboard extends Component {
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
          <SideBar />
          {/* <Nav /> */}
          {/* <AddExpenses /> */}
          <TodayHeader />
          <TodayJumbotron />
          <TodaysTransactions />
          </div>
        );
      }
    };
    
    export default Dashboard;