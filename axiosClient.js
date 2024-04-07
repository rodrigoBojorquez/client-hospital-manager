import axios from "axios";

export const axiosClient = axios.create({
    // API URL
    // GABO
    //baseURL: "http://192.168.1.93:8000/",
    // RODRIGO
    // baseURL: "http://192.168.1.244:8000/",
   // baseURL: "http://10.0.1.32:8000/",
    // ALEXIS
    baseURL: "http://192.168.1.68:8000/",
    timeout: 2000
})