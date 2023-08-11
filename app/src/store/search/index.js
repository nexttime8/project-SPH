import { reqSearchList } from "@/api/index"

const state = {
  SearchList: {},
}
const mutations = {
  GETSEARCHLIST(stata, SearchList) {
    stata.SearchList = SearchList
  },
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqSearchList(params)
    if (result.code === 200) {
      commit("GETSEARCHLIST", result.data)
    }
  },
}
const getters = {}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
