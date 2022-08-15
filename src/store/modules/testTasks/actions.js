export default {
  addTestTask(context, payload) {
    const task = payload;
    context.commit("ADD_TEST_TASK", task);
  },
  deleteTestTask(context, payload) {
    const taskId = payload;
    context.commit("DELETE_TEST_TASK", taskId);
  },
  editTestTask(context, payload) {
    const ttask = payload;
    context.commit("EDIT_TEST_TASK", ttask);
  },
};
