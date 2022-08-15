export default {
  columns(state) {
    return state.columns;
  },
  column: (_, getters) => (id) => {
    const columns = getters.columns;
    return columns.find((column) => column.id === id);
  },
};
