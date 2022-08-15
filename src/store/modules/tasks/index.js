import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: "task1",
          title: "task 1",
          description: "It's task 1",
          labels: ["label1", "label2", "label3", "label4", "label5"],
          status: "1",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "task2",
          title: "task 2task 2task 2task 2task 2task 2",
          description:
            "It's task 2ask 2task 2task 2task 2task 2ask 2task 2task 2task 2task 2ask 2task 2task 2task 2task 2",
          labels: ["label1"],
          status: "2",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "task3",
          title: "task 3",
          description: "It's task 3",
          labels: ["label2"],
          status: "1",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "task4",
          title: "task 4",
          description: "It's task 4",
          labels: ["label2"],
          status: "4",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
