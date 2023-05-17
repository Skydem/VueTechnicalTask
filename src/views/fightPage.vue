<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row cols="12">
          <FightYourFox />
          <FightOptions />
          <EnemyFoxCard />
        </v-row>
      </v-container>
      <ResultOverlay />
    </v-main>
  </v-app>
</template>

<script>
import FightYourFox from "@/components/FightPage/FightYourFox.vue";
import EnemyFoxCard from "@/components/FightPage/EnemyFoxCard.vue";
import FightOptions from "@/components/FightPage/FightOptions.vue";
import ResultOverlay from "@/components/ResultOverlay.vue";

export default {
  name: "FightPage",
  components: {
    FightYourFox,
    EnemyFoxCard,
    FightOptions,
    ResultOverlay,
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
