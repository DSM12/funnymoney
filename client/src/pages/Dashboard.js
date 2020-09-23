import React, { Component } from "react";
import TransactionsModal from "../components/TransactionsModal";
import TodaysTransactions from "../components/TodaysTransactions";
import SideBar from "../components/Sidebar";
import '../pages/DashBoard.css';

class Dashboard extends Component {
  state = {
    Date: "",
    Amount: "",
    Description: "",
    Merchant: "",
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const Date = event.target.Date;
    const Amount = event.target.Amount;
    const Description = event.target.Description;
    const Merchant = event.target.Merchant;


    this.setState({
      Date: "",
      Amount: "",
      Description: "",
      Merchant: "",
    });
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log(this.state);



  };



  render() {
    return (
      <div>
        <br></br>
        <header id="FunnyMoney">Funny Money</header>
        <SideBar />
        <div id="TransactionsModal">
        <TransactionsModal show={this.state.show} onClose={this.showModal} />
        </div>
        <div id="TodaysTransactions">
        <TodaysTransactions />
        </div>
        <div id="ModalButton">
          <br></br>
        <button id="TransactionButton" onClick={e => {
          this.showModal();
        }}
        > Add Transaction! </button>
        </div>
      </div>
    );
  }
};

export default Dashboard;