<template>
  <div class="base-task-card">
    <button class="base-task-card__dots">
      <span>⋮</span>
      <span class="base-task-card__picklist">
        <ul>
          <li>1</li>
        </ul>
      </span>
    </button>

    <!-- <div class="base-task-card__cols">
      <button
        v-for="column in columns"
        :key="column.id"
        @click="editTask(column.id)"
      >
        {{ column.title }}
      </button>
    </div> -->
    <div class="base-task-card__labels">
      <div v-for="label in labels" :key="label">
        <base-label-card
          :title="label.title"
          :color="label.color"
          :description="label.description"
          :createdDate="label.createdDate"
        ></base-label-card>
      </div>
    </div>
    <h3 class="base-task-card__title">{{ title }}</h3>
    <div class="base-task-card__description">{{ description }}</div>
  </div>
</template>

<script>
import store from "@/store";

import BaseLabelCard from "./BaseLabelCard.vue";
import { computed } from "@vue/reactivity";
export default {
  components: {
    BaseLabelCard,
  },
  props: ["id", "title", "description", "createdDate", "labels", "status"],

  setup(props) {
    const columns = computed(() => store.getters["columns/columns"]);
    const editTask = (x) => {
      console.log(props.id);
      store.dispatch("tasks/editTask", {
        id: props.id,
        status: x,
      });
    };
    return { editTask, columns };
  },
};
</script>

<style lang="scss" scoped>
.base-task-card {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  text-align: left;
  gap: 8px;
  position: relative;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 2px 8px,
    rgba(17, 17, 26, 0.05) 0px 2px 8px;
  transition: 0.25s; /* vendorless fallback */
  -o-transition: 0.25s; /* opera */
  -ms-transition: 0.25s; /* IE 10 */
  -moz-transition: 0.25s; /* Firefox */
  -webkit-transition: 0.25s; /*safari and chrome */

  &:hover {
    cursor: pointer;
    background-color: rgb(246, 246, 246);
  }

  &__dots {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
    align-self: flex-start;
    border-radius: 4px;
    padding: 2px 4px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 24px;
    position: relative;

    &:hover {
      background: rgb(222, 222, 222);
    }
  }

  &__cols {
    display: flex;
    font-size: 28px;
  }

  &__labels {
    grid-area: 1 / 1 / 2 / 2;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 4px;
  }

  &__title {
    font-size: 18px;
    margin: 0;
    line-height: 1;
    grid-area: 2 / 1 / 3 / 3;
    margin: 4px 0;
    font-size: 18px;
  }

  &__description {
    font-size: 14px;
    margin: 0;
    line-height: 1;
    grid-area: 3 / 1 / 4 / 3;
  }

  &__picklist {
    display: flex;
    position: absolute;
    right: 12px;
    background-color: aliceblue;
  }
}
</style>
