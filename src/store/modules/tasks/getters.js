export default {
  tasks(state, _getters, _rootState, rootGetters) {
    const labels = rootGetters["labels/labels"];
    let tasks = [];

    for (let i = 0; i < state.tasks.length; i++) {
      let task = {
        id: state.tasks[i].id,
        title: state.tasks[i].title,
        description: state.tasks[i].description,
        labels: [],
        status: state.tasks[i].status,
      };
      for (let j = 0; j < state.tasks[i].labels.length; j++) {
        let labelFound = labels.find(
          (lab) => lab.id === state.tasks[i].labels[j]
        );
        if (labelFound) {
          task.labels.push(labelFound);
        }
      }
      tasks.push(task);
    }
    return tasks;
  },
  filteredTasks: (_state, getters) => (status) => {
    const tasks = getters.tasks;
    return tasks.filter((task) => task.status === status);
  },
};
