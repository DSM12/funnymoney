import React, { Component } from "react";
import API from "../../utils/API";
import TodaysTransactions from "../TodaysTransactions";

class TodaysJumbotron extends Component {
  state = {
      Date: "",
      Amount: "",
      Description: "",
      Merchant: "",
      dbTransactions: []
  };


  render() {
    return <div>
         <div className="jumbotron jumbotron-fluid">
        <h1>{transactions.Amount}</h1>
        </div>
      </div>
            

}
}

     

  


export default TodaysJumbotron;