export default {
  addColumn(context, payload) {
    const column = payload;
    context.commit("ADD_COLUMN", column);
  },
  deleteColumn(context, payload) {
    const columnId = payload;
    context.commit("DELETE_COLUMN", columnId);
  },
  editColumn(context, payload) {
    const column = payload;
    context.commit("EDIT_COLUMN", column);
  },
};
