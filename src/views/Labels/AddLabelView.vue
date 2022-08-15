<template>
  <h1>Add label</h1>
  <div>
    <p>Title</p>
    <input type="text" v-model="labelTitle" />
  </div>
  <div>
    <p>Description</p>
    <input type="text" v-model="labelDescription" />
  </div>
  <div>
    <p>Color</p>
    <input type="color" v-model="labelColor" />
  </div>
  <button @click="createLabel">Add</button>
</template>

<script>
import router from "@/router";
import store from "@/store";

import { ref } from "vue";
export default {
  setup() {
    const labelTitle = ref("");
    const labelDescription = ref("");
    const labelColor = ref("#0774ff");

    const createLabel = () => {
      store.dispatch("labels/addLabel", {
        id: labelTitle,
        title: labelTitle,
        description: "label 3 desc",
        color: labelColor,
      });
      router.replace("/labels");
    };

    return { labelTitle, labelDescription, labelColor, createLabel };
  },
};
</script>

<style></style>
