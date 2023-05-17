<template>
  <v-app>
    <v-main>
      <v-container fluid class="px-0">
        <IntroductionSheet />
        <MainSheet />
        <FooterSheet />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
import {mapActions, mapMutations} from "vuex";
import IntroductionSheet from "@/components/FrontPage/IntroductionSheet.vue";
import MainSheet from "@/components/FrontPage/MainSheet.vue";
import FooterSheet from "@/components/FrontPage/FooterSheet.vue";

export default {
  name: "FrontPage",
  components: {FooterSheet, MainSheet, IntroductionSheet},
  data: () => ({
    cards: [],
  }),
  methods: {
    ...mapMutations({
      saveStoreFox: "saveFox",
    }),
    ...mapActions(['getPic', 'getName']),
    saveFox(key) {
      this.saveStoreFox(key);
      router.push({ name: "fightPage" });
    },
  },
  beforeMount() {
    const generator = new CardStubService();
    this.cards = generator.generate();
    this.refreshAll();
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
</style>
