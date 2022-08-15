import moment from "moment";

export default {
  ADD_COLUMN(state, payload) {
    state.columns.push({ ...payload, createdDate: moment().format() });
  },
  DELETE_COLUMNL(state, payload) {
    const columnIndex = state.columns.findIndex(
      (column) => column.id === payload
    );
    state.columns.splice(columnIndex, 1);
  },
  EDIT_COLUMNL(state, payload) {
    state.columns = state.columns.map((column) => {
      if (column.id === payload.id) {
        return payload;
      }
      return column;
    });
  },
};
