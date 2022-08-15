import moment from "moment";

export default {
  ADD_TEST_TASK(state, payload) {
    state.tasks.push({ ...payload, createdDate: moment().format() });
  },
  DELETE_TASK(state, payload) {
    const taskIndex = state.tasks.findIndex((task) => task.id === payload);
    state.tasks.splice(taskIndex, 1);
  },
  EDIT_TEST_TASK(state, payload) {
    state.testTasks = state.testTasks.map((ttask) => {
      if (ttask.id === payload.id) {
        return { ...ttask, ...payload };
      }
      return ttask;
    });
  },
};
