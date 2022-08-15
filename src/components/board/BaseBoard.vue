<template>
  <div class="board-wrapper">
    <div class="board">
      <div class="board__piece" v-for="boardCol in columns" :key="boardCol.id">
        <base-board-column
          :title="boardCol.title"
          :colId="boardCol.id"
        ></base-board-column>
      </div>
      <button @click="createColumn">Add</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed, provide } from "vue";
import BaseBoardColumn from "./BaseBoardColumn.vue";

export default {
  components: { BaseBoardColumn },
  setup() {
    provide("c_test", editTask1);
    const columns = computed(() => store.getters["columns/columns"]);
    const allTasks = computed(() => store.getters["tasks/tasks"]);

    const createColumn = () => {
      store.dispatch("columns/addColumn", {
        id: 6,
        title: "6",
        task: "tasks6",
      });
    };

    function editTask1(id, status) {
      console.log(id, status);
      store.dispatch("tasks/editTask", {
        id: id,
        status: status,
      });
    }

    return {
      columns,
      createColumn,
      editTask1,
      allTasks,
    };
  },
};
</script>

<style>
.board-wrapper {
  width: 100%;
  flex-direction: row;
}
.board {
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
}
.board__piece {
  flex: auto;
  background-color: rgb(241, 241, 241);
  border-radius: 8px;
  min-width: 280px;
  max-width: 280px;
}
</style>
