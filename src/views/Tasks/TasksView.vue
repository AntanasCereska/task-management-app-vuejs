<template>
  <div>
    <h1>TASKS</h1>
    <base-board></base-board>
  </div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
import BaseBoard from "@/components/board/BaseBoard.vue";

export default {
  components: {
    BaseBoard,
  },
  setup() {
    const tasks1 = computed(() => store.getters["tasks/filteredTasks"](1));
    const tasks2 = computed(() => store.getters["tasks/filteredTasks"](2));

    return { tasks1, tasks2 };
  },
};
</script>

<style scoped>
div {
  width: 100vw;
}
</style>
