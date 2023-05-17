<template>
<SectionSheet :px="4" :lighten="2">
  <v-row align="center" justify="center">
    <v-col cols="12">
      <h1 class="title">SEKCJA 3</h1>
    </v-col>
  </v-row>
</SectionSheet>
</template>

<script>
import SectionSheet from "@/components/FrontPage/SectionSheet.vue";

export default {
  name: "FooterSheet",
  components: {SectionSheet}
}
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

@include title();
</style>
