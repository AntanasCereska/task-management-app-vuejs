export default {
  addBoard(context, payload) {
    const board = payload;
    context.commit("ADD_BOARD", board);
  },
  deleteBoard(context, payload) {
    const boardId = payload;
    context.commit("DELETE_BOARD", boardId);
  },
  editBoard(context, payload) {
    const board = payload;
    context.commit("EDIT_BOARD", board);
  },
};
