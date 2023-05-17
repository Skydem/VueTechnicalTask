<template>
  <FightColumn>
    <v-card>
      <v-card-title primary-title> Fight or run?</v-card-title>
      <v-card-text>
        Before fighting, you will roll d20. If result will be greater than 10,
        you will attack first. Good luck! 🦊
      </v-card-text>
      <v-card-text> 🎲 {{ counter }} 🎲 </v-card-text>
      <v-card-actions>
        <v-btn variant="flat" color="info" @click="fight()"> ⚔ Fight! ⚔ </v-btn>
        <v-btn @click="run()"> 🏃‍♀️ Run! 🏃‍♂️ </v-btn>
      </v-card-actions>
    </v-card>
  </FightColumn>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FightColumn from "./FightColumn.vue";
import router from "@/router";

export default {
  name: "FightOptions",
  components: { FightColumn },
  computed: {
    ...mapGetters(["choosenFox", "enemyFox", "enemyFoxCard", "yourFoxCard"]),
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    ...mapMutations([
      "changeEnemyFoxCardClass",
      "changeYourFoxCardClass",
      "toggleOverlay",
    ]),
    run() {
      router.push({ name: "frontPage" });
    },
    async fight() {
      if (
        !(this.choosenFox.stats.health > 0) &&
        !(this.enemyFox.stats.health > 0)
      )
        return;
      const randSec = Math.random() * 19 + 1;
      this.counter = 0;
      for (let i = 0; i < randSec; i++) {
        await new Promise((r) => setTimeout(r, 100 + i * 10));
        this.counter++;
      }
      if (this.counter > 10) {
        this.enemyFox.stats.health -= this.choosenFox.stats.attack;
        this.changeEnemyFoxCardClass("bg-red-lighten-2");
        await new Promise((r) => setTimeout(r, 300));
        this.changeEnemyFoxCardClass("");
      } else {
        this.choosenFox.stats.health -= this.enemyFox.stats.attack;
        this.changeYourFoxCardClass("bg-red-lighten-2");
        await new Promise((r) => setTimeout(r, 300));
        this.changeYourFoxCardClass("");
      }

      if (this.enemyFox.stats.health <= 0 && this.choosenFox.stats.health > 0) {
        this.toggleOverlay();
      }
      if (this.choosenFox.stats.health <= 0 && this.enemyFox.stats.health > 0) {
        const newOverlayText = "You lost! 😥";
        this.toggleOverlay(newOverlayText);
      }
    },
  },
};
</script>
