import axios from "axios";

export default {
  getTransactions: function() {
    return axios.get("/api/transactions");
  },
  getUser: function(userData){
    return axios.get("/api/user", userData);
  },
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/CreateNewAcct", userData);
  },
  saveTransactions: function(TransactionsData) {
    console.log(TransactionsData);
    return axios.post("/api/transactions", TransactionsData);
  }
};