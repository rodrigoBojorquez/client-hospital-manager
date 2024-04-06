import axios from "axios";

export const axiosClient = axios.create({
    // API URL
    baseURL: "http://192.168.1.93:8000/",
    timeout: 2000
})