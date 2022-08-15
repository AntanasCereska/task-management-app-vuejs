import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      boards: [{ id: 1, title: "daily tasks", task: "tasks1" }],
    };
  },
  mutations,
  actions,
  getters,
};
