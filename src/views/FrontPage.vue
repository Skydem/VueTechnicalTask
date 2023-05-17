<template>
  <v-app>
    <v-main>
      <v-container fluid class="px-0">
        <v-sheet
          class="section bg-grey-lighten-4 px-14"
          v-scroll-snap="{ mandatory: true }"
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="title">Tomasz Torbus Technical Task</h1>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet
          class="section bg-grey-lighten-3 px-4"
          v-scroll-snap="{ mandatory: true }"
        >
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
              <FoxCard isFrontPage="True" :singleFox="card">
                <template #image>
                  <v-img height="60vh" :src="card.img" cover></v-img>
                </template>
                <template #title>
                  {{ card.title }}
                </template>
                <template #attack>
                  {{ card.stats.attack }}
                </template>
                <template #health>
                  {{ card.stats.health }}
                </template>
              </FoxCard>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet
          class="section bg-grey-lighten-2 px-4"
          v-scroll-snap="{ mandatory: true }"
          v-colo
        >
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="title">SEKCJA 3</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
import { mapActions, mapMutations } from "vuex";
import CardStubService from "@/services/CardStubService";
import FoxCard from "@/components/FoxCard.vue";

export default {
  name: "FrontP0age",
  components: { FoxCard },
  data: () => ({
    cards: [],
  }),
  methods: {
    ...mapMutations({
      saveStoreFox: "saveFox",
    }),
    ...mapActions(["getPic", "getName", "rollFox"]),
    async refreshAll() {
      this.cards.forEach((fox) => {
        this.rollFox(fox);
      });
    },
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

.section {
  height: 100vh;
  scroll-snap-align: start;
}
.title {
  font-size: 32px;
  text-align: center;
  margin-top: 50vh;
  transform: translateY(-50%);
}
</style>
