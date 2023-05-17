<template>
  <v-card>
    <slot name="image"></slot>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          <slot name="title"></slot>
        </h3>
      </div>
    </v-card-title>

    <v-card-text>
      <p>
        Attack:
        <slot name="attack"></slot>
      </p>
      <p>
        Health:
        <slot name="health"></slot>
      </p>
    </v-card-text>

    <v-card-actions v-if="isFrontPage">
      <v-btn variant="flat" color="info" @click="saveFox(cards[index])">
        Select fox!
      </v-btn>
      <v-btn @click="rollFox(card)"> Next fox please! </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "FoxCard",
  data() {
    return {
      fox: [],
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
    // async refreshAll() {
    //   this.cards.forEach((fox) => {
    //     this.rollFox(fox);
    //   });
    // },
    saveFox(key) {
      this.$store.dispatch("saveFox", key);
      router.push({ name: "fightPage" });
    },
  },
  //   beforeMount() {
  //     this.refreshAll();
  //   },
  props: {
    isFrontPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
