import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://blogifyamit.herokuapp.com/api/"
})