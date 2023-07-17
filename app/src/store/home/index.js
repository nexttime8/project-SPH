import { reqCategoryList, reqBannerList } from "@/api"

const state = {
  categoryList: [],
  bannerList: [],
}
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
}
const actions = {
  async getCategoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code === 200) {
      commit("GETCATEGORYLIST", result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await reqBannerList()
    if (result.code === 200) {
      commit("GETBANNERLIST", result.data)
    }
  },
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
