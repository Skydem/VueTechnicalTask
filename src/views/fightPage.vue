<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-sheet>
          <v-row cols="12" sm="4">
            <v-col cols="4" justify="center" align="center">
              <FoxCard>
                <template #image>
                  <v-img :src="choosenFox.img" cover></v-img>
                </template>
                <template #title>
                  {{ choosenFox.title }}
                </template>
                <template #attack>
                  {{ choosenFox.stats.attack }}
                </template>
                <template #health>
                  {{ choosenFox.stats.health }}
                </template>
              </FoxCard>
            </v-col>

            <v-col cols="4" align="center" justify="center">
              <v-card>
                <v-card-title primary-title> Fight or run?</v-card-title>
                <v-card-text>
                  Before fighting, you will roll d20. If result will be greater
                  than 10, you will attack first. Good luck! 🦊
                </v-card-text>
                <v-card-text> 🎲 {{ counter }} 🎲 </v-card-text>
                <v-card-actions>
                  <v-btn variant="flat" color="info" @click="fight()">
                    ⚔ Fight! ⚔
                  </v-btn>
                  <v-btn @click="run()"> 🏃‍♀️ Run! 🏃‍♂️ </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="4" align="center" justify="center">
              <FoxCard>
                <template #image>
                  <v-img :src="enemyFox.img" cover></v-img>
                </template>
                <template #title>
                  {{ enemyFox.title }}
                </template>
                <template #attack>
                  {{ enemyFox.stats.attack }}
                </template>
                <template #health>
                  {{ enemyFox.stats.health }}
                </template>
              </FoxCard>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
      <v-dialog v-model="showOverlay" persistent maxWidth="300">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ overlayText }}</span>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="hideOverlay">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import router from "@/router";
import FoxCard from "@/components/FoxCard.vue";

export default {
  computed: {
    ...mapGetters(["choosenFox"]),
  },
  components: {
    FoxCard,
  },
  data() {
    return {
      enemyFox: {
        title: "Michael",
        img: "https://randomfox.ca/images/4.jpg",
        stats: {
          attack: 5,
          health: 4,
        },
      },
      counter: 0,
      turn: 0,
      fighter: 0, //if fighter 0, then its your turn, if fighter 1, its enemy turn
      showOverlay: false,
      overlayText: "You win! 🏆",
      yourFoxCard: "",
      enemyFoxCard: "",
    };
  },
  methods: {
    async getPic() {
      const getResponse = await axios.get("https://randomfox.ca/floof/");
      const newPic = getResponse.data.image;
      console.log("Got new floof", newPic);
      return newPic;
    },
    async getName() {
      const getResponse = await axios.get(
        "https://random-data-api.com/api/v2/users"
      );
      const newName = getResponse.data.first_name;
      console.log("Got new name", newName);
      return newName;
    },
    generateStats() {
      const newAttack = Math.floor(Math.random() * 9 + 1);
      const newHp = Math.floor(Math.random() * 9 + 1);
      console.log("sending stats: ", newAttack, newHp);
      return { newAttack, newHp };
    },
    async generateEnemyFox() {
      const newPic = await this.getPic();
      const newName = await this.getName();
      const getStats = this.generateStats();
      console.log("hello?");
      this.enemyFox.img = newPic;
      this.enemyFox.title = newName;
      this.enemyFox.stats.attack = getStats.newAttack;
      this.enemyFox.stats.health = getStats.newHp;
    },
    async fight() {
      //negacja return i pozniej kod - czysty kod
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
        this.enemyFoxCard = "bg-red-lighten-2";
        await new Promise((r) => setTimeout(r, 300));
        this.enemyFoxCard = "";
      } else {
        this.choosenFox.stats.health -= this.enemyFox.stats.attack;
        this.yourFoxCard = "bg-red-lighten-2";
        await new Promise((r) => setTimeout(r, 300));
        this.yourFoxCard = "";
      }

      if (this.enemyFox.stats.health <= 0 && this.choosenFox.stats.health > 0) {
        this.showOverlay = true;
      }
      if (this.choosenFox.stats.health <= 0 && this.enemyFox.stats.health > 0) {
        this.overlayText = "You lost! 😥";
        this.showOverlay = true;
      }
    },
    run() {
      router.push({ name: "frontPage" });
    },
    hideOverlay() {
      this.showOverlay = false;
      router.push({ name: "frontPage" });
    },
  },
  beforeMount() {
    this.generateEnemyFox();
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
.card-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
