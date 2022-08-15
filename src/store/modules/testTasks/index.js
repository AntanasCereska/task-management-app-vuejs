import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      testTasks: [
        { id: 0, title: "item A", list: 1 },
        { id: 1, title: "item B", list: 1 },
        { id: 2, title: "item C", list: 2 },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
