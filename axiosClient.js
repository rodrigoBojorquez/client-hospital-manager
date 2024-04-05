import axios from "axios";

export const axiosClient = axios.create({
    // API URL
    baseURL: "http://192.168.1.244:8000/",
    timeout: 2000
})