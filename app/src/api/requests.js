import axios from "axios"

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

requests.interceptors.request.use((config) => {
  return config
})

requests.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(Error("false"))
  }
)

export default requests
