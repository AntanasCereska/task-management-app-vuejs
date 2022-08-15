export default {
  testTasks(state) {
    return state.testTasks;
  },
  filteredTestTasks: (_, getters) => (list) => {
    const testTasks = getters.testTasks;
    return testTasks.filter((tt) => tt.list === list);
  },
};
