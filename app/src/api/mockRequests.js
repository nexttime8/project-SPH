import axios from "axios"

import nprogress from "nprogress"
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
})

// 请求拦截
requests.interceptors.request.use((config) => {
  nprogress.start()
  return config
})
// 响应拦截
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
