import axios from "axios"

import nprogress from "nprogress"
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

requests.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  (err) => {
    return Promise.reject(Error("false"))
  }
)

export default requests
