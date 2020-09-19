import axios from "axios";

export default {
  // Gets books from the Google API
  getTransactions: function() {
    return axios.get("/api/transactions");
  },
  // Deletes the saved book with the given id
  deleteTransaction: function(id) {
    return axios.delete("/api/transactions/" + id);
  },
  // Saves an book to the database
  saveUser: function(userData) {
    return axios.post("/api/CreateNewAcct", userData);
  },
  saveTransactions: function(TransactionsData) {
    console.log(TransactionsData);
    return axios.post("/api/transactions", TransactionsData);
  }
};


//FIGURE OUT WHERE AND WHY WE ARENT CONNECTING TO MONGO EXACTLY