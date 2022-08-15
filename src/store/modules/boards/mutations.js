import moment from "moment";

export default {
  ADD_BOARD(state, payload) {
    state.boards.push({ ...payload, createdDate: moment().format() });
  },
  DELETE_BOARD(state, payload) {
    const boardIndex = state.boards.findIndex((board) => board.id === payload);
    state.boards.splice(boardIndex, 1);
  },
  EDIT_BOARD(state, payload) {
    state.boards = state.boards.map((board) => {
      if (board.id === payload.id) {
        return payload;
      }
      return board;
    });
  },
};
