import axios from "axios";
const BASEURL = "https://randomuser.me/api";
// const APIKEY = "&apikey=trilogy";

export default {
  getAll: function(query) {
    return axios.get(BASEURL)
  },
  search: function(query) {
    return axios.get(BASEURL + "/?" + query);
  }
};