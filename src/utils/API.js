import axios from "axios";

export default {
  getAll: function() {
    return axios.get("https://randomuser.me/api/?results=5000");
  },
  search: function(query) {
    return axios.get("https://randomuser.me/api/?" + query);
  }
};