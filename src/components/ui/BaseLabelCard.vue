<template>
  <div class="base-label-card" :style="{ 'background-color': `${color}` }">
    <span class="base-label-card__title">{{ title }} </span>
    <span class="base-label-card__tooltip"
      >{{ description }} | {{ createdDate }}</span
    >
  </div>
</template>

<script>
export default {
  props: ["color", "title", "description", "createdDate"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.base-label-card {
  border-radius: 20px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover &__tooltip {
    visibility: visible;
  }

  &__title {
    color: white;
    max-width: 160px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__tooltip {
    color: white;
    background-color: black;
    text-align: center;
    padding: 8px;
    border-radius: 8px;
    visibility: hidden;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
}
</style>
