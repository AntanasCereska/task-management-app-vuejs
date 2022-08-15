export default {
  labels(state) {
    return state.labels;
  },
  label: (_, getters) => (id) => {
    const labels = getters.labels;
    return labels.find((label) => label.id === id);
  },
};
