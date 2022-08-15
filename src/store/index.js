import { createStore } from "vuex";
import labelsModule from "./modules/labels/index.js";
import tasksModule from "./modules/tasks/index.js";
import columnsModule from "./modules/columns/index.js";
import testTasks from "./modules/testTasks/index.js";

export default createStore({
  modules: {
    labels: labelsModule,
    tasks: tasksModule,
    columns: columnsModule,
    testTasks: testTasks,
  },

  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
