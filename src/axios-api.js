import axios from 'axios'

const getAPI = axios.create({
  baseURL: 'https://mysql.uz/api',
  timeout: 1000
})

export { getAPI }
