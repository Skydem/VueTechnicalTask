<template>
<SectionSheet :px="4" :lighten="3">
  <v-row align="center" justify="center">
    <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
      <FoxCard isFrontPage :single-fox="card">
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
</SectionSheet>
</template>

<script>
import SectionSheet from "@/components/FrontPage/SectionSheet.vue";
import CardStubService from "@/services/CardStubService";
import {mapActions} from "vuex";
import FoxCard from "@/components/FoxCard.vue";

export default {
  name: "MainSheet",
  components: {FoxCard, SectionSheet},
  data: () => ({
    cards: [],
  }),
  beforeMount() {
    const generator = new CardStubService();
    this.cards = generator.generate();
    this.refreshAll();
  },
  methods: {
    ...mapActions(['rollFox']),
    async refreshAll() {
      this.cards.forEach((fox) => {
        this.rollFox(fox);
      });
    },
  },
}
</script>
