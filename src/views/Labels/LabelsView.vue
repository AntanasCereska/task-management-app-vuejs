<template>
  <div class="labelsView">
    <h1>LABELS</h1>
    <div class="table">
      <table>
        <tr>
          <th style="width: 240px">Id</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="label in labels" :key="label.id">
          <td>
            <base-label-card
              :title="label.title"
              :color="label.color"
              :description="label.description"
              :createdDate="label.createdDate"
              :key="label.id"
            ></base-label-card>
          </td>
          <td>{{ label.description }}</td>
          <td>
            <router-link
              :to="{
                name: 'edit-label',
                params: {
                  labelId: label.id,
                },
              }"
              ><button>edit label</button></router-link
            >
          </td>
          <td><button @click="deleteLabel(label.id)">delete label</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
import moment from "moment";
import BaseLabelCard from "@/components/ui/BaseLabelCard.vue";

export default {
  setup() {
    const time = computed(() => moment().format());
    const labels = computed(() => store.getters["labels/labels"]);
    const deleteLabel = (labelId) => {
      if (confirm("delete?")) {
        store.dispatch("labels/deleteLabel", labelId);
      }
    };
    return { time, labels, deleteLabel };
  },
  components: { BaseLabelCard },
};
</script>

<style lang="scss" scoped>
.labelsView {
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.table {
  overflow-x: auto;
}
table {
  table-layout: auto;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 15px;
}
th,
td {
  background-color: rgb(219, 219, 219);
  padding: 12px;
}
td:first-child,
th:first-child {
  border-radius: 12px 0 0 12px;
}
td:last-child,
th:last-child {
  border-radius: 0 12px 12px 0;
}
tr td:nth-last-child(-n + 2) {
  width: 1%;
  white-space: nowrap;
}
</style>
