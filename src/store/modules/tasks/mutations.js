import moment from "moment";

export default {
  ADD_TASK(state, payload) {
    state.tasks.push({ ...payload, createdDate: moment().format() });
  },
  DELETE_TASK(state, payload) {
    const taskIndex = state.tasks.findIndex((task) => task.id === payload);
    state.tasks.splice(taskIndex, 1);
  },
  EDIT_TASK(state, payload) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === payload.id) {
        return { ...task, ...payload };
      }
      return task;
    });
  },
};
