import requests from "./requests.js" // 一定要和文件名一致
import mockRequests from "./mockRequests.js"

// 分别暴露，接收那边用{}一个个接收
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" })

// search模块获取数据
// export const reqSearchList = () => requests({ url: "/list", method: "post" })
export const reqSearchList = (data) =>
  requests({ url: "/list", method: "post", data })

// home模块banner组件获取数据
export const reqBannerList = () =>
  mockRequests({ url: "/banners", method: "get" })

// home模块floor组件获取数据
export const reqFloorList = () =>
  mockRequests({ url: "/floors", method: "get" })
