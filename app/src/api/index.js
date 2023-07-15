import requests from "./requests.js" // 一定要和文件名一致

export const reqCategoryList = () =>
  // 分别暴露{}
  requests({ url: "/product/getBaseCategoryList", method: "get" })
