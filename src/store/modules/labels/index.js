import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      labels: [
        {
          id: "label1",
          title: "UX/UI",
          description: "It's label 1",
          color: "#0051ff",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "label2",
          title: "front-end",
          description: "It's label 2",
          color: "#ff55f2",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "label3",
          title: "back-end",
          description: "It's label 3",
          color: "#2596be",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "label4",
          title: "basic",
          description: "It's label 4",
          color: "#6b827e",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
        {
          id: "label5 ",
          title: "label5 label5 label5 label5",
          description: "It's label 5",
          color: "#6bc97e",
          createdDate: "2022-08-07T14:46:58+03:00",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
