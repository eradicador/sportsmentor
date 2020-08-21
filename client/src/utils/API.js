import axios from "axios";

export default {
    // API request to server side 
    register(data) {
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },
    getSportscard: function () {
        return axios.get("/api/sportscard");
    },
    saveSportscard: function (email, cardId) {
        return axios.post("/api/sportscard/" + email + "/" + cardId);
    },
    getUsercard: function (id) {
        return axios.get("api/dashboard/card/" + id)
    }
    
}