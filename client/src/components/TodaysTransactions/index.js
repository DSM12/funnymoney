import React, { Component } from "react";
import API from "../../utils/API";
var moment = require('moment');

class TodaysTransactions extends Component {
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
            this.setState({ dbTransactions: results.data })
            console.log(results);
        });
    };

    render() {
        // const state = this.state;
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


export default TodaysTransactions;












// function TodaysTransactions() {
//     return (
//         <div>
//             <h2>Todays Transactions</h2>
//             <table>
//                 <tbody>
//                 <tr>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th>Description</th>
//                     <th>Merchant</th>
//                 </tr>
//                 {
//             transactions.map((transactions, index) => {
//                     return (
//                         <tr key={index}>
//                             <td>{transactions.Date}</td>
//                             <td>{transactions.Amount}</td>
//                             <td>{transactions.Description}</td>
//                             <td>{transactions.Merchant}</td>
//                         </tr>
//                     )
//             })
//         }
//             </tbody>
//             </table>
//         </div>
//     );
//   }

//   export default TodaysTransactions;