import React, { Component } from "react";
import API from "../../utils/API";
var moment = require('moment');

class WeeklyTransactions extends Component {
    state = {
        Date: "",
        Amount: "",
        Description: "",
        Merchant: "",
        dbTransactions: []
    };

    componentDidMount() {
        this.getTransactions()
    }

    getTransactions() {
        API.getTransactions({
        }).then(results => {
            var tempArray = [];
            const week = moment().format('YYYY-MM-DD');
            const from_date = moment().day(0).format('YYYY-MM-DD').split(12,1)[0];
            const to_date = moment().day(6).format('YYYY-MM-DD').split(12,1)[0];

            


            console.log(from_date, to_date);
            for(var i = 0; i < results.data.length; i++){
                if(results.data[i].Date == week){
                    tempArray.push(results.data[i]);
                }
            }
            this.setState({ dbTransactions: tempArray});
            console.log(tempArray);
        });
    };

    render() {
        return <div>
            <h2>Todays Transactions</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Merchant</th>
                    </tr>
                    {
                        this.state.dbTransactions.map((transaction, index) => {
                            return (
                                <tr key={index}>
                                    <td>{transaction.Date}</td>
                                    <td>{transaction.Amount}</td>
                                    <td>{transaction.Description}</td>
                                    <td>{transaction.Merchant}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}


export default WeeklyTransactions;