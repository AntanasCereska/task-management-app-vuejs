<template>
  <h1>Edit label</h1>
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
  <button @click="editLabel">Edit</button>
  {{ label }}
  {{ route.params.labelId }}
  <router-link to="/labels">cancel</router-link>
</template>

<script>
import router from "@/router";
import store from "@/store";
import { useRoute } from "vue-router";

import { ref, computed } from "vue";
export default {
  props: ["labelId"],

  setup() {
    const route = useRoute();
    const label = computed(() =>
      store.getters["labels/label"](route.params.labelId)
    );
    const labelTitle = ref(label.value.title);
    const labelDescription = ref(label.value.description);
    const labelColor = ref(label.value.color);

    const editLabel = () => {
      store.dispatch("labels/editLabel", {
        id: label.value.id,
        title: labelTitle,
        description: labelDescription,
        color: labelColor,
      });
      router.replace("/labels");
    };

    return {
      route,
      label,
      labelTitle,
      labelDescription,
      labelColor,
      editLabel,
    };
  },
};
</script>

<style></style>
