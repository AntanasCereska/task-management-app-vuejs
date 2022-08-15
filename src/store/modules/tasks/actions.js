export default {
  addTask(context, payload) {
    const task = payload;
    context.commit("ADD_TASK", task);
  },
  deleteTask(context, payload) {
    const taskId = payload;
    context.commit("DELETE_TASK", taskId);
  },
  editTask(context, payload) {
    const task = payload;
    context.commit("EDIT_TASK", task);
  },
};
