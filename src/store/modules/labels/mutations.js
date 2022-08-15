import moment from "moment";

export default {
  ADD_LABEL(state, payload) {
    state.labels.push({ ...payload, createdDate: moment().format() });
  },
  DELETE_LABEL(state, payload) {
    const labelIndex = state.labels.findIndex((label) => label.id === payload);
    state.labels.splice(labelIndex, 1);
  },
  EDIT_LABEL(state, payload) {
    state.labels = state.labels.map((label) => {
      if (label.id === payload.id) {
        return payload;
      }
      return label;
    });
  },
};
