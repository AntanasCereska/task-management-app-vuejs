<template>
  <div
    class="drop-zoe"
    @drop="onDrop($event, 1)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in testTasks1"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
      <button @click="editTestTask(item.id, 2)">edit</button>
    </div>
  </div>

  <div
    class="drop-zone"
    @drop="onDrop($event, 2)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in testTasks2"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
      <button>edit</button>
    </div>
  </div>
  <pre>{{ testTasks }}</pre>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
export default {
  setup() {
    const testTasks1 = computed(() =>
      store.getters["testTasks/filteredTestTasks"](1)
    );
    const testTasks2 = computed(() =>
      store.getters["testTasks/filteredTestTasks"](2)
    );
    const testTasks = computed(() => store.getters["testTasks/testTasks"]);
    /*     const items = ref([
      { id: 0, title: "item A", list: 1 },
      { id: 1, title: "item B", list: 1 },
      { id: 2, title: "item C", list: 2 },
    ]); */
    const editTestTask = (id, list) => {
      console.log(id, list);
      store.dispatch("testTasks/editTestTask", {
        id: id,
        list: list,
      });
    };
    const getList = (list) => {
      return testTasks.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("ITEMID", item.id);
      event.dataTransfer.setData("ITEMLIST", item.list);
    };

    const onDrop = (event, list) => {
      const ITEMID = event.dataTransfer.getData("ITEMID");
      const ITEMLIST = event.dataTransfer.getData("ITEMLIST");
      const item = testTasks.value.find((item) => item.id == ITEMID);
      console.log(ITEMID, ITEMLIST);
      item.list = list;
      editTestTask(ITEMID, ITEMLIST);
    };

    return {
      getList,
      startDrag,
      onDrop,
      editTestTask,
      testTasks1,
      testTasks2,
      testTasks,
    };
  },
};
</script>

<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: aliceblue;
  padding: 10px;
  min-height: 10px;
}

.drag-el {
  background-color: rgb(88, 88, 88);
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
