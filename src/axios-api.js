import axios from "axios";

const getAPI = axios.create({
    baseURL: 'https://mysql.uz/api'
})

export { getAPI }
