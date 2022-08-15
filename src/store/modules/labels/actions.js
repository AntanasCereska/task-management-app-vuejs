export default {
  addLabel(context, payload) {
    const label = payload;
    context.commit("ADD_LABEL", label);
  },
  deleteLabel(context, payload) {
    const labelId = payload;
    context.commit("DELETE_LABEL", labelId);
  },
  editLabel(context, payload) {
    const label = payload;
    context.commit("EDIT_LABEL", label);
  },
};
