import React from "react";
import Expenses from "../../data/expenses";

function TodaysTransactions({ }) {
    return (
        <div>
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
            Expenses.map((expense, index) => {
                    return (
                        <tr key={index}>
                            <td>{expense.Date}</td>
                            <td>{expense.Amount}</td>
                            <td>{expense.Description}</td>
                            <td>{expense.Merchant}</td>
                        </tr>
                    )
            })
        }
            </tbody>
            </table>
        </div>
    );
  }
  
  export default TodaysTransactions;