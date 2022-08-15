<template>
  <div class="base-board-column">
    <div>
      <h3>{{ title }}</h3>
      <input type="text" name="" id="" />
    </div>
    <div
      v-for="task in tasks"
      :key="task.id"
      @drop="onDrop($event, 4)"
      @dragenter.prevent
      @dragover.prevent
    >
      <base-task-card
        draggable="true"
        @dragstart="onDrag(task.id, '2')"
        :id="task.id"
        :title="task.title"
        :color="task.color"
        :description="task.description"
        :createdDate="task.createdDate"
        :labels="task.labels"
      ></base-task-card>
      <button @click="testa(task.id, (parseInt(task.status) + 1).toString())">
        edit
      </button>
    </div>
    <button v-if="newTaskWindow == false" @click="newTaskToggle">create</button>
    <div v-if="newTaskWindow == true">
      <input type="text" placeholder="title" />
      <textarea placeholder="title" rows="4" />
      <button>Create</button>
      <button @click="newTaskToggle">Cancel</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed, ref, inject } from "vue";
import BaseTaskCard from "../ui/BaseTaskCard.vue";

export default {
  props: ["colId", "title"],
  components: {
    BaseTaskCard,
  },

  setup(props) {
    const testa = inject("c_test");
    const tasks = computed(() =>
      store.getters["tasks/filteredTasks"](props.colId)
    );

    // const allTasks = computed(() => store.getters["tasks/tasks"]);

    const newTaskWindow = ref(false);
    const newTaskToggle = () => {
      newTaskWindow.value = !newTaskWindow.value;
    };

    const createTask = () => {
      store.dispatch("tasks/addTask", {
        id: "task5",
        title: "task 5",
        description: "It's task 5",
        labels: ["label1", "label2"],
        status: props.colId,
      });
    };
    // const editTask1 = (id, status) => {
    //   console.log(id, status);
    //   store.dispatch("tasks/editTask", {
    //     id: id,
    //     status: status,
    //   });
    // };
    // const startDrag = (event, item) => {
    //   console.log(item);
    //   event.dataTransfer.dropEffect = "move";
    //   event.dataTransfer.effectAllowed = "move";
    //   event.dataTransfer.setData("ITEMID", item.id);
    //   event.dataTransfer.setData("ITEMLIST", item.status);
    // };

    // const onDrop = (event, status) => {
    //   const ITEMID = event.dataTransfer.getData("ITEMID");
    //   const ITEMLIST = event.dataTransfer.getData("ITEMLIST");
    //   const item = allTasks.value.find((item) => item.id == ITEMID);
    //   console.log(ITEMID, +ITEMLIST);
    //   item.status = status;
    //   editTask1(ITEMID, ITEMLIST);
    // };
    return {
      tasks,
      createTask,
      newTaskToggle,
      newTaskWindow,
      testa,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
  text-align: left;
  margin: 0 8px;
}
.base-board-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 8px;
}
</style>
