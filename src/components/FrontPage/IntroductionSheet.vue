<template>
  <SectionSheet :px="4" :lighten="14">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="title">Tomasz Torbus Technical Task</h1>
      </v-col>
    </v-row>
  </SectionSheet>
</template>

<script>
import SectionSheet from "@/components/FrontPage/SectionSheet.vue";

export default {
  name: "IntroductionSheet",
  components: {SectionSheet},
}
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

@include title();
</style>
