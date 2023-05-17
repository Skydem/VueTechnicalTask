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
            <v-col
              cols="12"
              md="4"
              v-for="(card, index) in cards"
              :key="index"
              v-cloak
            >
              <v-card>
                <v-img height="60vh" :src="card.img" cover></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ card.title }}</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <p>Attack: {{ card.stats.attack }}</p>
                  <p>Health: {{ card.stats.health }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="flat"
                    color="info"
                    @click="saveFox(cards[index])"
                  >
                    Select fox!
                  </v-btn>
                  <v-btn @click="rollFox(card)"> Next fox please! </v-btn>
                </v-card-actions>
              </v-card>
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
import axios from "axios";
import router from "@/router";

export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          title: "Michael",
          img: "https://randomfox.ca/images/4.jpg",
          stats: {
            attack: 5,
            health: 4,
          },
        },
        {
          title: "John",
          img: "https://randomfox.ca/images/21.jpg",
          stats: {
            attack: 8,
            health: 2,
          },
        },
        {
          title: "Doe",
          img: "https://randomfox.ca/images/37.jpg",
          stats: {
            attack: 1,
            health: 2,
          },
        },
      ],
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
      const newAttack = Math.floor(Math.random() * 10);
      const newHp = Math.floor(Math.random() * 10);
      console.log("sending stats: ", newAttack, newHp);
      return { newAttack, newHp };
    },
    async rollFox(key) {
      console.log(`Got card! ${key}`);
      const newPic = await this.getPic();
      const newName = await this.getName();
      const getStats = this.generateStats();
      key.img = newPic;
      key.title = newName;
      key.stats.attack = getStats.newAttack;
      key.stats.health = getStats.newHp;
    },
    async refreshAll() {
      this.cards.forEach((fox) => {
        this.rollFox(fox);
      });
    },
    saveFox(key) {
      this.$store.dispatch("saveFox", key);
      router.push({ name: "fightPage" });
    },
  },
  beforeMount() {
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
.card-group {
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  transform: translateY(-50%);
}
</style>
