import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      columns: [
        { id: "1", title: "backlog", task: "tasks1" },
        { id: "2", title: "todo", task: "tasks2" },
        { id: "3", title: "doing", task: "tasks3" },
        { id: "4", title: "done", task: "tasks4" },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
