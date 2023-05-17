<template>
  <v-sheet
    class="section"
    :class="[`bg-grey-lighten-${lighten}`, `px-${px}`]"
    v-scroll-snap="{ mandatory: true }"
  >
    <slot />
  </v-sheet>
</template>

<script>
export default {
  name: "SectionSheet",
  props: {
    lighten: {
      type: Number,
      required: true,
    },
    px: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
